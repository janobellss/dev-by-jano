import React from 'react';

// STYLESHEET
import './ProjectView.css';

// COMPONENTS
import Btn3d from '../Button/Btn3d';

import projectsData from './projectsData';

import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/scale-out-animation';

// const ProjectView = (props) => {
class ProjectView extends React.Component {
    state = {
        projectsData: projectsData
    }
    
    render() {
        // console.log("IS PROJECT VIEW OPENED? " + this.props.isProjectOpen);

        const projectsView = this.state.projectsData.map((data) => data);
        // console.log("HAHA: " + projectsView[0].id);
        // console.log("PROJECT VIEW OPENED: " + this.props.projectOpened);

        let projectOpened = this.props.projectOpened;
        let projectIndex = projectOpened != 0 ? projectOpened - 1 : projectOpened;

        // console.log("PROJECT OPENED ID: " + projectOpened);
        // console.log("PROJECT INDEX: " + projectIndex);

        if(isNaN(projectIndex)) {
            // console.log("PROJECT INDEX IS NAN!");
            projectIndex = 0;
        }
        
        let projectTitle = projectsView[projectIndex].projectTitle;
        let projectDescription = projectsView[projectIndex].projectDescription;
        let projectDescriptionMobile = projectsView[projectIndex].projectDescriptionMobile;
        let projectLink = projectsView[projectIndex].projectLink;

        // let projectImg = projectsView[projectIndex].projectImg;
        // console.log("PROJECT IMG: " + projectImg);
        // console.log("PROJECT LINK: " + projectLink);

        const projectImg = projectsView[projectIndex].projectImg.map((data) => <div 
            key={projectsView[projectIndex].id}
            data-src={data}
        />);

        let projectViewClass = 'project-view';

        if(this.props.isProjectOpen) {
            projectViewClass = 'project-view open';
        }
        
        return(
            <div className={projectViewClass}>
                <div className='project-view-content bg-dark-2'>
                    <div className='project-view-close'>
                        <button className='project-view-close-btn title' onClick={() => {this.props.projectViewClickToggler(projectOpened)}}>[X] Close</button>
                    </div>

                    <div className='project-view-content-wrapper'>
                        <div className='project-view-slider'>
                            <AwesomeSlider 
                                cssModule={AwesomeSliderStyles}
                                bullets={false}
                            >
                                {projectImg}
                            </AwesomeSlider>
                        </div>

                        <div className='project-view-details'>
                            <p className='project-view-title title'>{projectTitle}</p>

                            <p className='project-view-description copy-description'>
                                {projectDescription}
                            </p>

                            <p className='project-view-description-mobile copy-description'>
                                {projectDescriptionMobile}
                            </p>

                            <div className='project-view-explore'>
                                <Btn3d 
                                    btnType={'button'} 
                                    btnValue={'EXPLORE'} 
                                    projectLink={projectLink}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectView;