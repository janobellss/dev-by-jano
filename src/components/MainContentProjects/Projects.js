import React, { useState } from 'react';

// STYLESHEET
import './Projects.css';

// REACT SPRING
import { Spring, animated as a, config } from 'react-spring/renderprops';

const Projects = (props) => {
    const [isHovered, setHovered] = useState(false);

    return(
        <Spring 
            native 
            // from={{ o: 0, sc: 1 }} 
            to={{ o: isHovered ? 0.7 : 0, 
                sc: isHovered ? 1.1 : 1, 
                // btnC: isHovered ? 'rgb(17,17,17)' : 'rgb(245,245,245)',
                // btnBorder: isHovered ? '1px solid rgb(17,17,17)' : '1px solid rgb(245,245,245)' 
            }}
            config={ config.slow }
        >
            {({ o, sc }) => (
                <div className='project-1'
                    onMouseLeave={() => setHovered(false)}
                    onMouseOver={() => setHovered(true)}
                    // onClick={props.projectViewClickToggler}
                    onClick={() => {props.projectViewClickToggler(props.data.id)}}
                >
                    <a.div className='project-1-img' style={{
                            backgroundImage: `url(${props.data.bg})`,
                            transform: sc.interpolate(sc => `scale(${sc})`)
                        }}
                    ></a.div>
                    
                    <div className='project-1-overlay'></div>
                    <div className='project-1-overlay-anim'></div>

                    <a.button className='project-1-btn title' style={{
                            background: o.interpolate(o => `rgba(30, 144, 255,${o})`),
                        }}
                    >
                        {props.data.btn}
                    </a.button>

                    <p className='project-1-title title'>
                        {props.data.title}
                    </p>
                </div>
            )}
        </Spring>
    );
}

export default Projects;