import React, { Component } from 'react';

// STYLESHEET
import './Footer.css';

// COMPONENT
import Social from './Social';
import socialData from './socialData';

// REACT REVEAL
import Fade from 'react-reveal/Fade';

// function Footer() {
class Footer extends Component {
    state = {
        socialData: socialData
    }

    render(){

        const socialComp = this.state.socialData.map((item) =>
            <Social 
                key={item.id}
                data={item}
            /> 
        );

        const contactDetails = [
            { item: ' ' },
            // { item: '+63 956 551 2046' },
            { item: 'quiambao.johnrhonest@gmail.com' },
            // { item: 'Unit 404 Bldg. 2 - Callista' },
            // { item: 'Jenny\'s Ave., Brgy. Rosario' },
            { item: 'Pasig City, Philippines, 1609' }
        ]

        const contactAvail = [
            { item: 'Availability' },
            { item: 'Weekdays: 10pm - 6am' },
            { item: 'Weekends: 10am - 6pm' },
        ]

        const copyRight = 'Copyright 2019 by Jano Quiambao. All Rights Reserved. Created using React.js. v.2.0';
        // \'devlikejano.com\' or \'developerlikejano.com\' or \'devbyjano.com\'

        const details = contactDetails.map((item, i) => <p key={i}>{item.item}</p>);
        const avail = contactAvail.map((item, i) => <p key={i}>{item.item}</p>);
    
        return(
            <footer className='footer bg-dark-2'>
                <div className='footer-wrapper'>
                    <div className='footer-connect'>
                        <Fade bottom>
                            <p className='footer-connect-title title'>Connect</p>
                            <div className='footer-connect-icons'>
                                {socialComp}
                            </div>
                        </Fade>
                    </div>
                    <div className='footer-contact'>
                        <div className='footer-contact-details'>
                            <Fade bottom>
                                {details}
                            </Fade>
                        </div>
                        <div className='footer-contact-availability'>
                            <Fade bottom>
                                {avail}
                            </Fade>
                        </div>
                    </div>
                    <div className='footer-copyright'>
                        <Fade bottom>
                            <p>&copy; {copyRight}</p>
                        </Fade>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;