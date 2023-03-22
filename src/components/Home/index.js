import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const firstNameArray = [' ', 'M','o','h', 'a', 'm', 'm', 'e','d']
    const nameArray = ['D','A','M', '.']
    const jobArray = ['D','é','v','e','l','o','p','p','e','u', 'r', ' ', 'W', 'e', 'b', '.']

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={`${letterClass} _11`}>H</span>
                        <span className={`${letterClass} _12`}>E</span>
                        <span className={`${letterClass} _13`}>L</span>
                        <span className={`${letterClass} _14`}>L</span>
                        <span className={`${letterClass} _15`}>O,</span>
                        <br />
                        <span className={`${letterClass} _16`}>I</span>
                        <span className={`${letterClass} _17`}>'m</span>
                        <AnimatedLetters letterClass={letterClass} strArray={firstNameArray} idx={18}/>
                        <img src={LogoTitle} alt='developer' />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={26}/>
                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={29}/>
                    </h1>
                    <h2>Développeur Fullstack / JavaScript / React / Node.Js</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Home;