import React from 'react';

// STYLESHEET
import './Skills.css';

// COMPONENT
import GaugeChart from 'react-gauge-chart';

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills(props) {
    return(
        <div className='skills-details'>
            <GaugeChart 
                id={props.data.gId}
                marginInPercent={props.data.marginInPercent}
                cornerRadius={props.data.cornerRadius}
                nrOfLevels={props.data.nrOfLevels}
                percent={props.data.percent}
                arcWidth={props.data.arcWidth}
                colors={[props.data.colors]}
                textColor={props.data.textColor}
                needleColor={props.data.needleColor}
                needleBaseColor={props.data.needleBaseColor}
            />

            <div className='skills-details-icon-name'>
                <div className='skills-details-icon'>
                    <FontAwesomeIcon 
                        icon={[props.data.iconType, props.data.icon]} 
                        style={{color:props.data.iconColor}}
                    />  
                </div>

                <p className='skills-details-name title'>
                    {props.data.text}
                </p>
            </div>
        </div>
    );
}

export default Skills;