import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from 'next/link'

const inter = Inter({ subsets: ["latin"] });

export default function Home({product}) {
  return (
    <>
    {
      product&&product.map((e,i)=>{
        return(
          
          <Link 
          href={`product/${e.id}`}
          
          key={i}>
            <h2>{e.id}</h2>
          </Link>
        )
      })
    }
    </>
  );
}

export async function getServerSideProps(){
  const res = await fetch('https://datawomb.com/wsadmpr/products', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Api-Key": "64b6a6e24af6ad70a3fd5ddd",
    },
  });
  const data = await res.json();
  const product=data.data.data;

  return {
    props:{
      product
    }
  }
}
