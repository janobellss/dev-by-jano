import React, { Component } from 'react';

// STYLESHEET
import './MainContentWorkExp.css';

// COMPONENTS
import WorkExp from './WorkExp';
import workExpData from './workExpData';

// REACT REVEAL
import Fade from 'react-reveal/Fade';

class MainContentWorkExp extends Component {
    constructor() {
        super();
        this.state = {
            workExpData: workExpData
        }
    }

    render() {

        let title = 'my life as a developer';
        let subtitle1 = 'a decade of experience in online advertising, digital marketing, and developing Rich Media Ads using latest technologies available.';

        const workExpComp = this.state.workExpData.map(item => <WorkExp 
            key={item.id} 
            data={item}
        />)

        return(
            <div className='main-content-work-exp bg-dark-1'>
                <div className='main-content-work-exp-lines section-line-wrapper'>
                    <div className='main-content-work-exp-line section-line'></div>
                </div>

                <Fade bottom>
                    <p className='main-content-work-exp-title title'>
                        {title}
                    </p>
                    <p className='main-content-work-exp-subtitle-1 subtitle'>
                        {subtitle1}
                    </p>
                </Fade>

                <div className='main-content-work-exp-details'>
                    <Fade bottom>
                        {workExpComp}
                    </Fade>
                </div>
            </div>
        );
    }
}

export default MainContentWorkExp;