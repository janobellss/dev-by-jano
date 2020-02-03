import React, { useState } from 'react';

// STYLESHEET
import './Skills2.css';

// REACT SPRING
import { Spring, animated as a, config } from 'react-spring/renderprops';

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills2 = (props) => {
    // const [isHovered, setHovered] = useState(false);

    let skillsDetailsStyle = {
        width: props.data.skillWidth
    }

    let skillsDetailsBarStyle = {
        height: props.data.barHeight
    }

    return(
        <Spring 
            native 
            from={{ o: 0, w: 0 }} 
            to={{ o: 1, 
                w: props.data.percentage
            }}
            config={ config.gentle }
        >
            {({ o, w }) => (
                <div className='skills-details-2' style={skillsDetailsStyle}>
                    <div className='skills-details-icon-name-2'>
                        <div className='skills-details-icon-2'>
                            <FontAwesomeIcon 
                                icon={[props.data.iconType, props.data.icon]} 
                                style={{color:props.data.iconColor}}
                            />
                        </div>

                        <p className='skills-details-name-2 title'>
                            {props.data.text}
                        </p>

                        <div className='skills-details-spacer-2'></div>

                        {/* <p className='skills-details-perc-2 title'>
                            {props.data.percentage}%
                        </p> */}
                    </div>
                    
                    <div className='skills-details-bar-2' style={skillsDetailsBarStyle}>
                        <a.div className='skills-details-ind-2' style={{
                            opacity: o,
                            width: w.interpolate(w => `${w}%`)
                            // width: w.interpolate(w => `scale(${sc})`)
                        }}></a.div>
                    </div>
                </div>
            )}
        </Spring>
    );
}

export default Skills2;