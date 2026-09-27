import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import ExploreTrails from '../components/ExploreTrails';
import Featured from '../components/Featured';

const Home = () => {
  return (
    <div>
      <Header />
      <ExploreTrails />
      <SpecialityMenu />
      <Featured />
      <Banner />
      <TopDoctors />
    </div>
  )
}

export default Home