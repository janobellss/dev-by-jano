import React, { Component } from 'react';

// STYLESHEET
import './MainContentProjects.css';

// COMPONENTS
import Projects from './Projects';
import projectsData from './projectsData';

import ProjectView from './ProjectView';

// REACT REVEAL
import Fade from 'react-reveal/Fade';

class MainContentProjects extends Component {
    state = {
        projectsData: projectsData,
        isProjectOpen: false,
        projectOpened: 0
    }

    projectViewClickToggler = (id) => {
        // console.log("ID: " + id);
        // console.log("PROJECT OPENED: " + this.state.projectOpened);

        this.setState((prevState) => {
            return {
                isProjectOpen: !prevState.isProjectOpen,
                projectOpened: id
            }
        });

        // this.sendData();
    }

    // sendData = () => {
    //     this.props.callbackFunction(!this.state.isProjectOpen);
    // }

    render() {

        let title = 'what I do';
        let subtitle1 = 'I develop front end applications and simple to complex interactive rich media banners.';
        // let subtitle2 = 'interactive rich media advertisements.';

        const projectsComp = this.state.projectsData.map((item) => <Projects 
            key={item.id}
            data={item}
            isProjectOpen={this.state.isProjectOpen}
            projectViewClickToggler={this.projectViewClickToggler}
        />);

        // let projectView;

        // // console.log("fsMenuShow: " + this.props.fsMenuShow);
        // // console.log("isProjectOpen: " + this.state.isProjectOpen);

        // if(this.state.isProjectOpen) {
        //     projectView = <ProjectView 
        //                     isProjectOpen={this.state.isProjectOpen} 
        //                     projectViewClickToggler={this.projectViewClickToggler}
        //                     projectOpened={this.state.projectOpened}
        //                     />

        //     // this.props.showTargetElement();
        // } else {
        //     // this.props.hideTargetElement();
        // }

        if(this.props.fsMenuShow || this.state.isProjectOpen) {
            this.props.showTargetElement();
        } else {
            this.props.hideTargetElement();
        }

        // console.log("PROJECT OPENED AGAIN: " + this.state.projectOpened);

        return(
            <div className='main-content-projects bg-dark-1'>
                <div className='main-content-projects-lines section-line-wrapper'>
                    <div className='main-content-projects-line section-line'></div>
                </div>

                <Fade bottom>
                    <p className='main-content-projects-title title'>
                        {title}
                    </p>
                    <p className='main-content-projects-subtitle-1 subtitle'>
                        {subtitle1}
                    </p>
                    {/* <p className='main-content-projects-subtitle-2 subtitle'>
                        {subtitle2}
                    </p> */}
                </Fade>

                <div className='main-content-projects-details'>
                    {/* <Fade bottom> */}
                        {projectsComp}
                    {/* </Fade> */}
                </div>

                <ProjectView 
                    isProjectOpen={this.state.isProjectOpen} 
                    projectViewClickToggler={this.projectViewClickToggler}
                    projectOpened={this.state.projectOpened}
                />
            </div>
        );
    }
}

export default MainContentProjects;