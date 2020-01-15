import React, { useState } from 'react';

// STYLESHEET
import './WorkExp.css';

// REACT SPRING
import { Spring, animated as a, config } from 'react-spring/renderprops';

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function WorkExp(props) {
    const [isHovered, setHovered] = useState(false);
    const trans = xx => `translateX(${xx}px)`;

    return(
        <Spring 
            native 
            to={{ x: isHovered ? -20 : 0 }}
            config={ config.wobbly }
        >
            {({ x }) => (
                <a.div className='work-exp-icon-work'
                    onMouseLeave={() => setHovered(false)}
                    onMouseOver={() => setHovered(true)}
                    style={{ transform: x.interpolate(trans) }}
                >
                    <div className='work-exp-icon'>
                        <FontAwesomeIcon icon={['fas','code']} />
                    </div>
                    <div className='work-exp'>
                        <p className='work-exp-date title'>
                            {props.data.date}
                        </p>
                        <p className='work-exp-title subtitle'>
                            {props.data.title}
                        </p>
                        <p className='work-exp-company title'>
                            {props.data.company}
                        </p>
                        <p className='work-exp-copy copy-description'>
                            {props.data.details}
                        </p>
                        <hr className='work-exp-hr'></hr>
                    </div>
                </a.div>
            )}
        </Spring>
    );
}

export default WorkExp;