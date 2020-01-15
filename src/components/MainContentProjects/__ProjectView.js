import React from 'react';

// STYLESHEET
import './ProjectView.css';

// COMPONENTS
import Btn3d from '../Button/Btn3d';

import projectsData from './projectsData';

import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/scale-out-animation';

const ProjectView = (props) => {
    const img1 = 'https://images.pexels.com/photos/2607492/pexels-photo-2607492.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260';

    const img2 = 'https://images.pexels.com/photos/2162442/pexels-photo-2162442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

    const img3 = 'https://images.pexels.com/photos/3125852/pexels-photo-3125852.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

    // MAP TEST
    // const test = [{
    //     id:1, 
    //     n:'haha'
    // },
    // {
    //     id:2, 
    //     n:'hehe'
    // }];

    // const test2 = test.map((data) => data);

    // console.log(test2[0].n);
    // MAP TEST
    
    return(
        <div className='project-view bg-dark-2'>
            <div className='project-view-content'>
                <div className='project-view-close'>
                    <button className='project-view-close-btn title' onClick={props.projectViewClickToggler}>[X] Close</button>
                    <p className='project-view-title title'>THIS IS PROJECT VIEW</p>
                </div>
                
                <div className='project-view-slider'>
                    <AwesomeSlider 
                        cssModule={AwesomeSliderStyles}
                        bullets={false}
                    >
                        <div data-src={img1} />
                        <div data-src={img2} />
                        <div data-src={img3} />
                    </AwesomeSlider>
                </div>

                <p className='project-view-description copy-description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis, arcu at finibus pharetra, metus odio faucibus sem, eget tempus.
                </p>

                <div className='project-view-explore'>
                    <Btn3d 
                        btnType={'button'} 
                        btnValue={'EXPLORE'} 
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectView;