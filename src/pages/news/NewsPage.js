import Layout from '../Layout'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CMSDataSourceType, getCmsDataSets } from '../../services/content/dataSource.service'
import { useLanguage } from '../../context/language-provider'

const NewsPage = () => {
  const [newsData, setNewsData] = useState();
  const { currentLanguage } = useLanguage()
  const {t} = useTranslation("page");

  useEffect(() => {
    const getNews = async (currentLang) => {
      setNewsData(await getCmsDataSets(CMSDataSourceType.NEWS,  currentLang));
    }
    getNews(currentLanguage)
  }, [currentLanguage])

  return (
    <Layout title={t('news')}>
      <div className="fs-content-wrapper">
        {newsData?.data?.cmsDataSource?.items?.map((item) =>
        <NewsEntry item={item} key={item.id} />,
        )}
      </div>
    </Layout>
)
}

const NewsEntry = ({ item}) => {
  return <>
    {item.data?.tt_title ? <h3 className={`mt-10 text-2xl font-light text-eerieBlack`}>{item.data.tt_title}</h3> : null}
    <div className="md:flex">
      {item.data?.tt_image?.resolutions?.ORIGINAL ?
      <img className="h-48 w-full object-cover md:h-full md:w-48" src={item.data.tt_image.resolutions.ORIGINAL.url}
           alt="an image" />
       : null}
      <div>
        {item.data?.tt_text ? item.data?.tt_text.map((textItem) => {
          return <p className="text-lg text-eerieBlack font-light m-1 p-2">{textItem.content[0]?.content}</p>
        }) : null}
      </div>
    </div>
  </>
}


export default NewsPage
