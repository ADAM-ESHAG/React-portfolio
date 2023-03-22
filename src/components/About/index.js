import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
            <div className='container about-page' id='text-about'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't',' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Je suis un développeur web très ambitieux à la recherche 
                        d'un rôle dans une entreprise spécialisée dans le IT avec 
                        l'opportunité de travailler avec les dernières technologies 
                        sur des projets ambitieux et diversifiés.
                    </p>
                    <p align="LEFT">
                        Je suis confiant, naturellement curieux et je travaille 
                        constamment à améliorer mes compétences.
                    </p>
                    <p>
                        Si je devais me définir en une phrase ce serait une personne 
                        ambitieuse et pragmatique qui veut contribuer à de grands 
                        projets innovants qui peuvent changer l'histoire de l'humanité !
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faNode} color='#7743CE'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
};

export default About;