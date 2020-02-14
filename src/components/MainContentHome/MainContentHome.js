import React, { useState, useRef, useEffect } from 'react';

// STYLESHEET
import './MainContentHome.css';

// COMPONENT
import ScrollDownBtn from '../ScrollDownBtn/ScrollDownBtn';

// GREENSOCK
import { TimelineLite, TweenMax, Power3, Bounce, Power2 } from 'gsap';

// REACT REVEAL
import Fade from 'react-reveal/Fade';

function MainContentHome() {

    let title = 'Jano Quiambao';

    const descriptions = [
        { item: 'Front-End Developer', item2: useRef(null) },
        { item: 'Creative Developer', item2: useRef(null) },
        { item: 'Rich Media Developer', item2: useRef(null) },
        { item: 'Toy Collector', item2: useRef(null) },
        { item: 'Woodworker', item2: useRef(null) },
        { item: 'Dog Lover', item2: useRef(null) },
        { item: 'Gym Enthusiast', item2: useRef(null) },
    ]

    const desc = descriptions.map((item, i) => 
        <div key={i} ref={el => {item.item2 = el}} className='desc-title title'>{item.item}</div>
    );

    const [tl] = useState(new TimelineLite({paused: true}));
    // const [allowScrollBtn, setAllowScrollBtn] = useState(true);

    // const scrollBtnAnim = () => {
    //     let duration = 1;
    //     // TweenMax.set(scrollBtn_el, { opacity:1 });
    //     // TweenMax.to(scrollBtn_el, 0.5, { opacity:0, ease:Power3.easeOut, delay:0.5, onComplete:() => {
    //     //     // scrollBtnAnim();
    //     // }});

    //     TweenMax.to(scrollBtn_el, duration / 4, { y:-50, ease:Power2.easeOut, delay:0 });
    //     TweenMax.to(scrollBtn_el, duration / 2, {y:0, ease:Bounce.easeOut, delay:2, onComplete:() => {
    //         setTimeout(function() {
    //             scrollBtnAnim();
    //         }, 1000);
    //     }});
    // }

    useEffect(() => {
        const descAnim = descriptions.map((item, i) => 
            tl
                .set(item.item2, { y:-20 })
                .to(item.item2, 0.5, { opacity:1, y:0, ease:Power3.easeOut })
                .to(item.item2, 0.5, { opacity:0, y:10, ease:Power3.easeOut, delay:1, onComplete:() => {
                    if(descriptions.length - 1 === i) {
                        tl.restart();
                    }
                }})
        );

        tl.play();

        // scrollBtnAnim();
    }, []);
      
    return(
        <div className='main-content-home full-size'>
            <div className='main-content-home-overlay full-size'>
                {/* <Fade left> */}
                    <div className='main-content-home-desc-title'>
                        <div className='main-content-home-description'>
                            {desc}
                        </div>
                        <p className='main-content-home-title subtitle'>{title}</p>
                    </div>
                {/* </Fade> */}
            </div>

            <ScrollDownBtn />
        </div>
    );
}

export default MainContentHome;