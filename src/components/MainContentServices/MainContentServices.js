import React, { Component } from 'react';

// STYLESHEET
import './MainContentServices.css';

// COMPONENTS
import Services from './Services';
import servicesData from './servicesData';

// REACT REVEAL
import Fade from 'react-reveal/Fade';

class MainContentServices extends Component {
    state = {
       servicesData: servicesData
    }

    render() {
        
        let title = 'Services';
        let subtitle1 = 'Here\'s what I can offer';

        const servicesComp = this.state.servicesData.map((item) => <Services 
            key={item.id}
            data={item}
        />);

        return(
            <div className='main-content-services bg-dark-1'>
                <div className='main-content-services-lines section-line-wrapper'>
                    <div className='main-content-services-line section-line'></div>
                </div>

                <Fade bottom>
                    <p className='main-content-services-title title'>
                        {title}
                    </p>
                    <p className='main-content-services-subtitle-1 subtitle'>
                        {subtitle1}
                    </p>
                </Fade>

                <div className='main-content-services-details'>
                    <Fade bottom>
                        {servicesComp}
                    </Fade>
                </div>
            </div>
        );
    }
}

export default MainContentServices;