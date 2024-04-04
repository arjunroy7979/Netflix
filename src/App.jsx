import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/banner/Banner'
import TvBanner from './components/banner/TvBanner'
import BannerDownload from './components/banner/BannerDownload'
import WatchBanner from './components/banner/WatchBanner'
import ChilderenBanner from './components/banner/ChilderenBanner'
import AskedQuestion from './components/AskedQuestion'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Banner/>
      <TvBanner/>
      <BannerDownload/>
      <WatchBanner/>
      <ChilderenBanner/>
      <AskedQuestion/>
      <Footer/>
    </div>
  )
}

export default App