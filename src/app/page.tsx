import Head from 'next/head';
import Header from './components/header';
import Banner from './components/banner';
import SmallerBanners from './components/smallerbanners';
import Categories from './components/category';
import Products from './components/products';
import Banner2 from './components/banner2';
import DiscountProducts from './components/discountproducts';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className='sm:grid sm:items-center sm:m-auto sm:justify-center '>  
    <Header/>   
    <Banner/>
    <SmallerBanners/>
    <Categories/>
    <Products/>
    <Banner2/>
    <DiscountProducts/>
    <Footer/>
   

    </div>
  );
}
