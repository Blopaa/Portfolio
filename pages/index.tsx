import TopView from '../src/components/topview/TopView';
import React from 'react';
import MiddleView from '../src/components/middleview/MiddleView';
import Navbar from '../src/components/navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <TopView />
      <MiddleView />
    </div>
  );
}
