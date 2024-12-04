import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="hero">
                <img src={hero_banner} alt="" className='banner-img' />
                <div className="hero-caption">
                    <img src={hero_title} alt="" className='caption-img' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nihil id placeat. Labore hic eveniet sapiente illo. Unde quisquam ipsam debitis nisi perferendis eligendi officia soluta magnam ea! Accusantium, nesciunt.</p>

                    <div className="hero-btns">
                        <button className='btn'><img src={play_icon} alt="" className='' />Play</button>
                        <button className='btn dark-btn'><img src={info_icon} alt="" className='' />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Blockbuster Movies"} />
                <TitleCards title={"Only on Netflix"} />
                <TitleCards title={"Upcoming"} />
                <TitleCards title={"Top Pics for YOU"} />
            </div>
            <Footer />
        </div>
    )
}

export default Home
