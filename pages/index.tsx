import TopView from '../src/components/topview/TopView';
import React from 'react';
import MiddleView from '../src/components/middleview/MiddleView';
import Downview from '../src/components/downview/downview';

export default function Home() {
  return (
    <div>
      <TopView />
      <MiddleView />
      <Downview />
    </div>
  );
}
