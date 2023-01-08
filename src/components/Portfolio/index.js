import React from 'react';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import ClipboardImg from "../../assets/images/cover/clipboard.jpg"
import SurveyImg from "../../assets/images/cover/survey.png"
import LandingImg from "../../assets/images/cover/Landing.png"
import BookiImg from "../../assets/images/cover/booki.png"
import OhmyfoodImg from "../../assets/images/cover/ohmyfood.png"
import LaPantereImg from "../../assets/images/cover/lapantere.png"
import KanapImg from "../../assets/images/cover/kanap.png"
// import ApiImg from "../../assets/images/cover/Api.png"
import KasaImg from "../../assets/images/cover/kasa.png"

const Protfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
            <div className='container portfolio-page' id='portfolio'>
                <div className='text-zone'>
                    <h1 className='page-title'>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Projects".split('')}
                            idx={15}
                        />
                    </h1>
                </div>
                <div className='projects'>
                    <a href='https://adam-eshag.github.io/Clipboard-Challenge/' rel="noreferrer" target='_blank' className='project'>
                        <img src={ClipboardImg} alt='Clipboard' />
                        <div className='description'>
                            <h4>Clipboard, Challenge </h4>
                            <p>Html5, Css3</p>
                        </div>
                    </a>
                    <a href='https://adam-eshag.github.io/Survey/' rel="noreferrer" target='_blank' className='project'>
                        <img src={SurveyImg} alt='Survey' />
                        <div className='description'>
                            <h4>Survey Form, Challenge </h4>
                            <p>Html5, Css3, Bootstrap</p>
                        </div>
                    </a>
                    <a href='https://adam-eshag.github.io/Clipboard-Challenge/' rel="noreferrer" target='_blank' className='project'>
                        <img src={LandingImg} alt='Landing' />
                        <div className='description'>
                            <h4>Landing, Challenge </h4>
                            <p>Html5, Css3, animations</p>
                        </div>
                    </a>
                    <a href='https://adam-eshag.github.io/P2_Booki_OpenclassRooms/' rel="noreferrer" target='_blank' className='project'>
                        <img src={BookiImg} alt='Booki' />
                        <div className='description'>
                            <h4>Booki</h4>
                            <p>Html5, Css3</p>
                        </div>
                    </a>
                    <a href='https://adam-eshag.github.io/Ohmyfood-OpenclassRooms/' rel="noreferrer" target='_blank' className='project'>
                        <img src={OhmyfoodImg} alt='Ohmyfood' />
                        <div className='description'>
                            <h4>OhMyFood</h4>
                            <p>Html5, Css3, advanced animation</p>
                        </div>
                    </a>
                    <a href='https://adam-eshag.github.io/Panthere/' rel="noreferrer" target='_blank' className='project'>
                        <img src={LaPantereImg} alt='La Panthère' />
                        <div className='description'>
                            <h4>La Panthère</h4>
                            <p>Html5, Css3, JavaScript, SEO</p>
                        </div>
                    </a>
                    <a href='https://kanap.onrender.com/' rel="noreferrer" target='_blank' className='project'>
                        <img src={KanapImg} alt='kanap' />
                        <div className='description'>
                            <h4>Kanap</h4>
                            <p>Html5, Css3, JavaScript</p>
                        </div>
                    </a>
                    <a href='https://thriving-naiad-2fdcfd.netlify.app/' rel="noreferrer" target='_blank' className='project'>
                        <img src={KasaImg} alt='Kasa' />
                        <div className='description'>
                            <h4>Kasa</h4>
                            <p>Html5, Css3, JavaScript, ReactJsx</p>
                        </div>
                    </a>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
};

export default Protfolio;