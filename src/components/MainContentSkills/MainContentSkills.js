import React, { Component } from 'react';

// STYLESHEET
import './MainContentSkills.css';

// COMPONENTS
import Skills from './Skills';
import skillsData from './skillsData';

import Skills2 from './Skills2';
import skillsData2 from './skillsData2';

// REACT REVEAL
import Fade from 'react-reveal/Fade';

class MainContentSkills extends Component {
    state = {
        skillsData: skillsData,
        skillsData2: skillsData2
    }

    render() {

        let title = 'Skills and Edges';
        let subtitle1 = 'Top 3 and more...';

        const skillsComp = this.state.skillsData.map((item) => <Skills 
            key={item.id}
            data={item}
        />);

        const skillsComp2 = this.state.skillsData2.map((item) => <Skills2 
            key={item.id}
            data={item}
        />);

        return(
            <div className='main-content-skills bg-dark-1'>
                <div className='main-content-skills-lines section-line-wrapper'>
                    <div className='main-content-skills-line section-line'></div>
                </div>

                <Fade bottom>
                    <p className='main-content-skills-title title'>
                        {title}
                    </p>
                    <p className='main-content-skills-subtitle-1 subtitle'>
                        {subtitle1}
                    </p>
                </Fade>
                
                <div className='main-content-skills-details'>
                    <Fade bottom>
                        {skillsComp}
                    </Fade>
                </div>

                <div className='main-content-skills-details-2'>
                    <div className='main-content-skills-details-2-wrapper'>
                        <Fade bottom>
                            {skillsComp2}
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContentSkills;