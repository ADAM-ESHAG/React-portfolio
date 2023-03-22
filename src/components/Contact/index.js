import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
           return setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            refForm.current,
            'YOUR_PUBLIC_KEY'  
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            }
        )
    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass} 
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                            idx={15}
                        />
                    </h1>
                    <p>
                        Je suis intéressé par les opportunités de freelance - en 
                        particulier sur des projets ambitieux ou de grande envergure. 
                        Cependant, si vous avez d'autres demandes ou questions, 
                        n'hésitez pas à me contacter en utilisant le formulaire ci-dessous.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Nom' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Sujet' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='Envoyer' ></input>
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <div className='info-map'>
                    Mohammed ADAM ESHAG, 
                    <br />
                    France, Paris
                    <br />
                    38/42 Chemin de St-léger
                    <br />
                    Stains, 93240 <br />
                    <span>mo.adam.eshag@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[48.955199, 2.38266]} zoom={11}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[48.955199, 2.38266]}>
                            <Popup>Adam lives here, come over for cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
};

export default Contact;