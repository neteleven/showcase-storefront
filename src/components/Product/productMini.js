import React from 'react'
import { addTenantToUrl } from '../../services/service.config'
import { Link } from 'react-router-dom'
// for very simple lists only (glossary maybe)

export const ProductMini = (props) => {
  const { productInfo } = props;

  return (
      <div className="grid grid-cols-2 bg-aliceBlue p-8 md:p-4 w-fit md:flex-row lg:flex-col gap-4 m-8 md:gap-8 standard_box_shadow rounded-xl">
          <h2 className="font-inter font-semibold text-2xl leading-[32px] mb-2 col-span-2">
            <Link to={addTenantToUrl(`product/details/${productInfo.id}`)}>
            {productInfo.name}
            </Link>
          </h2>
        <Link to={addTenantToUrl(`product/details/${productInfo.id}`)}>
          <img className="rounded-xl" src={productInfo.media[(Math.random() * productInfo.media.length) | 0]?.url}/>
        </Link>
        <p>
          {productInfo.description}
        </p>
      </div>

  )
}

