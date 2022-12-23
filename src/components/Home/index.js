import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import { useEffect, useState } from 'react'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['D','A','M',' ','E','S','H','A','G']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className='letterClass'>H</span>
                    <span className={`${letterClass} _12`}>E</span>
                    <span className={`${letterClass} _13`}>L</span>
                    <span className={`${letterClass} _14`}>L</span>
                    <span className={`${letterClass} _15`}>O,</span>
                    <br />
                    <span className={`${letterClass} _16`}>I</span>
                    <span className={`${letterClass} _17`}>'m</span>
                    <img src={LogoTitle} alt='developer' />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={18}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={26}/>
                </h1>
                <h2>Front-End Developer / JavaScript / React / NodeJs / </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home;