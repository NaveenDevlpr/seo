import React from 'react'
import Head from 'next/head'

const Product = ({seo}) => {
  return (
    <div>
        <Head>
            <meta name="title" context={seo.title}></meta>
            <meta name="description" context={seo.meta_description}></meta>
            <meta property="og:title" context={seo.title}></meta>
            <meta property="og:description" context={seo.meta_description}></meta>
            <meta property="og:image" content={seo.meta_img}></meta>
        </Head>
        <h2>{seo.title}</h2>
    </div>
  )
}

export default Product

export async function getServerSideProps({params}){
    const link=params.id

    const data=await fetch(`https://datawomb.com/wsadmpr/products/${link}`,
 
    {
      method: 'GET',
      headers: {
        
        "Content-Type": "application/json",
        "Api-Key": "64b6a6e24af6ad70a3fd5ddd",
        
       
      },
      
    })
    const res=await data.json()
    const seo=await res.data.seo

    return{
        props:{
            seo
        }
    }
}