import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useEffect, useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap.timeline()
        .to(bgRef.current, {
            duration: 1,
            opacity: 1
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
        })

        gsap.fromTo(solidLogoRef.current, 
            {
            opacity: 0,
            },
            {
                opacity: 1,
                delay: 2,
                duration: 2,
            } )
    }, [])


    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt='S' />
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="646.000000pt" height="727.000000pt" viewBox="0 0 646.000000 727.000000" preserveAspectRatio="xMidYMid meet">

                <g className="svg-container" transform="translate(0.000000,727.000000) scale(0.100000,-0.100000)" fill="#000000">
                    <path ref={outlineLogoRef} d="M3031 7025 c-206 -111 -378 -208 -383 -216 -5 -7 -228 -610 -497 -1339 -371 -1005 -678 -1810 -1270 -3334 -430 -1105 -779 -2011 -777 -2013 2 -3 359 87 793 199 l788 203 141 548 c78 301 144 553 147 560 3 7 244 109 536 225 l531 211 531 -107 532 -107 248 -683 c136 -376 249 -685 251 -686 5 -4 1742 -375 1744 -373 1 1 -337 657 -751 1457 -739 1425 -771 1490 -1566 3140 -447 927 -814 1692 -816 1701 -3 9 41 193 97 409 55 216 99 396 98 399 -2 4 -171 -83 -377 -194z m415 -3360 c293 -808 532 -1470 531 -1471 -1 -1 -218 92 -482 207 -264 115 -489 212 -501 215 -15 4 -133 -66 -450 -266 -236 -150 -436 -276 -446 -281 -14 -8 -15 -5 -8 24 5 17 185 716 400 1552 215 836 394 1527 397 1535 4 10 8 6 16 -15 6 -16 250 -691 543 -1500z"/>
                </g>
            </svg>

        </div>
    )
}

export default Logo;