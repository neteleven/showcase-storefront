import React, { useEffect, useRef, useState } from 'react'
import './content.css'
import FsGenericComponent from 'resolver/firstSpirit.resolver'
import { CMSFilterType, getCmsFilteredPage } from 'services/content/filteredPage.service'
import { useLanguage } from '../../context/language-provider'

const MainContent = ({page}) => {
  const [ content, setContent ] = useState([])
  const pageId = useRef(null)
  const currentPage = useRef()
  const { currentLanguage } = useLanguage()

  const getData = async (currentLang) => {
    let pageData;
    if (currentPage.current !== page) {
      pageId.current = undefined
    }
    if (pageId.current) {
      pageData = await getCmsFilteredPage(pageId.current, CMSFilterType.IDENTIFIER, currentLang);
      window.history.replaceState({}, '', "/n11showcase" + pageData.data?.cmsFilteredPage?.page?.route);
    } else {
      pageData = await getCmsFilteredPage(page, CMSFilterType.ROUTE, currentLang)
    }
    currentPage.current = page;
    pageId.current = pageData.data?.cmsFilteredPage?.page?.refId
    setContent(pageData)
  };

  useEffect(() => {
    getData(currentLanguage);
  }, [currentLanguage, page])

  return (
    <div>
      <FsGenericComponent props={content} />
    </div>
  )
}

export default MainContent