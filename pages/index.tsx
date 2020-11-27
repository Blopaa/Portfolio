import React from 'react';
import TopView from '../src/components/topview/TopView';
import MiddleView from '../src/components/middleview/MiddleView';
import Navbar from '../src/components/navbar/Navbar';
import Footer from '../src/components/footer/Footer';
import Head from '../src/components/head';

export default function Home() {
  return (
    <>
      <Head title="Pablo Sabater Portfolio" />
      <Navbar />
      <TopView />
      <MiddleView />
      <Footer />
    </>
  );
}
