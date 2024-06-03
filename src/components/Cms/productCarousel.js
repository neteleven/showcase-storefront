import React, { useEffect, useState } from 'react'
import productService from '../../services/product/product.service'
import Slider from 'react-slick'
import "./productCarousel.css"
import { addTenantToUrl } from '../../services/service.config'
import { Link } from 'react-router-dom'

export const ProductCarousel = (props) => {
  const [products, setProducts] = useState([]);
  const productIds = props.props?.data?.st_elements?.map((st_element)=>{return st_element.data.st_product?.value[0]?.identifier})

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 250,
    variableWidth: true
  };

  const fetchProducts = async ()=> {
    setProducts(await productService.getProductsWithIds(productIds));
  }

  useEffect(()=> {
    fetchProducts();
  },[]);

  if (!productIds || !productIds.length) {
    return;
  }

  return <>
    <Slider {...settings}>
      {products.map((p) => {
        return  <Link to={addTenantToUrl(`product/details/${p.id}`)}><img className="rounded-xl" src={p.media[0]?.url} /></Link>
      })}
      {products.length <= 3 && products.map((p) => {
        return <Link to={addTenantToUrl(`product/details/${p.id}`)}><img className="rounded-xl" src={p.media[0]?.url} /></Link>
      })}
    </Slider>
  </>
}
