import React from 'react';

// STYLESHEET
import './MainContentAbout.css';

// REACT REVEAL
import Fade from 'react-reveal/Fade';

function MainContentAbout() {

    let title = 'here\'s a little something about me';

    // let subtitle = 'I\'m a Creative Developer / Rich Media Developer who has a solid experience in developing online Rich Media Banners. Has a keen interest in learning new methodologies and tools.';

    let subtitle = 'Creative Developer / Front-End Web Developer experienced in developing Rich Media Banners and skilled in developing Websites. Adept at various Ad Platforms, Rich Media Banner authoring tools, and Front-End Web Development tools and libraries.';

    // let title2 = 'more about me';

    // const infoDetails = [
    //     { detail: '\"Jano Quiambao\"', info: '- you can call me' },
    //     { detail: '\"November 1988\"', info: '- was born in' },
    //     { detail: '\"Pasig City\"', info: '- currently living in' },
    //     { detail: '\"quiambao.johnrhonest@gmail.com\"', info: '- but you can reach me' },
    //     { detail: '\"+63 956 551 2046\"', info: '- and you may also contact me' }
    // ]

    // let infoDetailStyle = {
    //     paddingLeft: '0rem',
    //     paddingRight: '0rem'
    // }

    // let infoDetailStyle2 = {
    //     textAlign: 'right'
    // }

    // const detail = infoDetails.map((item, i) =>
    //     {
    //         let resultOfMod = i % 2;

    //         infoDetailStyle = {
    //             paddingTop: '3rem',
    //             paddingLeft: resultOfMod === 0 ? '14rem' : '0rem',
    //             paddingRight: resultOfMod === 0 ? '0rem' : '14rem'
    //         }

    //         infoDetailStyle2 = {
    //             textAlign: resultOfMod === 0 ? 'left' : 'right'
    //         }

    //         return <div className='about-info-detail' key={i} style={infoDetailStyle}>
    //             <p className='about-detail subtitle' style={infoDetailStyle2}>
    //                 {item.detail}
    //             </p>
    //             <p className='about-info title' style={infoDetailStyle2}>
    //                 {item.info}
    //             </p>
    //         </div>
    //     }
    // );
    
    return(
        <div className='main-content-about bg-dark-1'>
            <div className='main-content-about-lines section-line-wrapper'>
                <div className='main-content-about-line section-line'></div>
            </div>

            <Fade bottom>
                <p className='main-content-about-title title'>
                    {title}
                </p>

                <p className='main-content-about-subtitle subtitle'>
                    {subtitle}
                </p>

                {/* <p className='main-content-about-title-2 title'>
                    {title2}
                </p> */}
            </Fade>

            {/* <div className='main-content-about-details'>
                <Fade bottom>
                    {detail}
                </Fade>
            </div> */}
        </div>
    );
}

export default MainContentAbout;