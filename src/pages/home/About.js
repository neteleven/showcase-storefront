import React, {useEffect, useState} from 'react'
import {useContentful} from '../../context/contentful-provider'
import './about.css'

const About = () => {
    const {fields} = useContentful()
    const [introImageUrl, setIntroImageUrl] = useState('')

    const {mainImageRight} = fields

    useEffect(() => {
        ;(async () => {
            if (
                mainImageRight &&
                mainImageRight.fields &&
                mainImageRight.fields.file &&
                mainImageRight.fields.file.url
            ) {
                const dummyImage = "../../assets/homepage-banner.png";
                //setIntroImageUrl(mainImageRight.fields.file.url)
                setIntroImageUrl(dummyImage);
            }
        })()
    }, [mainImageRight])


    // {fields.mainTitle}, {fields.companyMission},
    return (
        <div
            // style={{ backgroundImage: `url(${landingBg})` }}
            className="home_about"
        >
            <div className="w-full lg:w-3/5 h-fit flex flex-col text-eerieBlack pt-40 md:pt-52 lg:pt-28 px-4 md:px-16 lg:pr-0 xl:pl-64 xl:pt-36">
                <div className="text-5xl md:!text-6xl !leading-[60px] lg:!text-7xl font-inter font-semibold md:leading-[64px] block">
                    Erleben Sie den <span className="text-primary">Luxus</span><br/> mit neteleven <span
                    className="text-primary">Wein</span>
                </div>
                <div className="text-[18px] leading-[30px] font-inter font-normal pt-[24px] md:max-w-[525px]">
                    Unsere exquisiten, handverlesenen Weine spiegeln die Eleganz und Qualität wider, die Sie von
                    neteleven erwarten
                </div>
                <div className="pt-[44px] desktop_only text-sm">
                    <button className="px-6 py-4 font-semibold bg-primary text-white rounded-xl">
                        {fields.startShoppingButtonLabel}
                    </button>
                </div>
            </div>

            <div className='flex justify-end w-full lg:w-2/5 lg:pt-48 h-fit md:-mt-16'>
                <img className="w-fit md:w-2/3 lg:w-fit h-fit" alt='' src="/img/bottlesandberries.png"/>
            </div>
            

        </div>
    )
}

export default About
