import React, { useState } from 'react';

// STYLESHEET
import './Social.css';

// REACT SPRING
import { Spring, animated as a, config } from 'react-spring/renderprops';

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Social = (props) => {
    const [isHovered, setHovered] = useState(false);

    return(
        <Spring
            native
            to={{
                o: isHovered ? 1 : 0.8, 
                sc: isHovered ? 1.1 : 1,
                c: isHovered ? 'rgb(30,144,255)' : 'rgb(245,245,245)'
            }}
            config={ config.wobbly }
        >
            {({ o, sc, c }) => (
                <a.div className='footer-connect-icon'
                    onMouseOver={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{ 
                        opacity:o,
                        transform: sc.interpolate(sc => `scale(${sc})`)
                    }}
                >
                    <a.a 
                        href={props.data.url} 
                        target={props.data.targetWindow}
                        style={{ color: c }}
                    >
                        <FontAwesomeIcon icon={[props.data.iconType,props.data.icon]} />
                    </a.a>
                </a.div>
            )}
        </Spring>
    );
}

export default Social;