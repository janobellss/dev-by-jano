import React, { useState } from 'react';

// STYLESHEET
import './Services.css';

// REACT SPRING
import { Spring, animated as a, config } from 'react-spring/renderprops';

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = (props) => {
    const [isHovered, setHovered] = useState(false);

    // const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
    // const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
    const trans = yy => `translateY(${yy}px)`;

    return(
        <Spring 
            native 
            // to={{ xys: [0, 0, 1] }}
            // config={{ mass: 5, tension: 350, friction: 40 }}
            to={{ y: isHovered ? -20 : 0 }}
            config={ config.wobbly }
        >
            {({ y }) => (
                <a.div className='services-details'
                    onMouseLeave={() => setHovered(false)}
                    onMouseOver={() => setHovered(true)}
                    // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    // onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    // style={{ transform: xys.interpolate(trans) }}
                    style={{ transform: y.interpolate(trans) }}
                >
                    <div className='services-details-icon-name'>
                        <div className='services-details-icon'>
                            <FontAwesomeIcon 
                                icon={[props.data.iconType, props.data.icon]} 
                                style={{color:props.data.iconColor}}
                            />
                        </div>

                        <p className='services-details-name title'>
                            {props.data.title}
                        </p>

                        <p className='services-details-desc copy-description'>
                            {props.data.description}
                        </p>
                    </div>
                </a.div>
            )}
        </Spring>
    );
}

export default Services;