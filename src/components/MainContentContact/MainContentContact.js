import React, { useState } from 'react';

// STYESHEET
import './MainContentContact.css';

// COMPONENT
import Btn3d from '../Button/Btn3d';

// REACT REVEAL
import Fade from 'react-reveal/Fade';

// CUSTOM HOOK
// import useContactForm from './CustomHooks';

// const sendFeedback = (templateId, variables) => {
// 	window.emailjs.send('papi_blanco069_gmail_com', templateId, variables).then(res => {
//     	console.log('Message successfully sent!')
//     })
      
//   	// Handle errors here however you like, or use a React error boundary
//   	.catch(err => console.error('ERROR: ', err))
// }

const MainContentContact = () => {
    // const contact = () => {
    //     // alert(`Message Sent!
    //     //        Name: ${inputs.firstName} ${inputs.lastName}
    //     //        Email: ${inputs.email}
    //     //        Subject: ${inputs.subject}
    //     //        Message: ${inputs.message}`);

    //     const templateId = 'feedback';

    //     sendFeedback(templateId, {
    //         name: inputs.firstName + " " + inputs.lastName, 
    //         email: inputs.email,
    //         subject: inputs.subject,
    //         message: inputs.message
    //     });
    // }

    // const { inputs, handleInputChange, handleSubmit } = useContactForm(contact);

    const initialValue = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    }

    const [{ firstName, lastName, email, subject, message }, setInput] = useState(initialValue);

    const [allowSubmit, setAllowSubmit] = useState(true);

    const submitStyle = {
        pointerEvents: allowSubmit ? 'auto' : 'none'
    }

    const clearState = () => {
        setInput({ ...initialValue });
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setInput(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        // alert(`Message Sent!
        //     Name: ${firstName} ${lastName}
        //     Email: ${email}
        //     Subject: ${subject}
        //     Message: ${message}`);

        const templateId = 'feedback';

        // console.log("ALLOW SUBMIT: " + allowSubmit);

        if(allowSubmit) {
            // console.log("SEND!");
            sendFeedback(templateId, {
                name: firstName + " " + lastName, 
                email: email,
                subject: subject,
                message: message
            });
            
            setAllowSubmit(false);
        } else {
            // console.log("DON'T SEND!");
        }
    };

    const sendFeedback = (templateId, variables) => {
        window.emailjs.send('papi_blanco069_gmail_com', templateId, variables).then(res => {
            // console.log('Message successfully sent!');
            clearState();
            setAllowSubmit(true);
        })
          
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('ERROR: ', err))
    }

    let title = 'Contact Me';

    let subtitle = 'Please don\'t forget to say Hi!';

    return(
        <div className='main-content-contact bg-light-1'>
            <Fade bottom>
                <p className='main-content-contact-title title'>
                    {title}
                </p>

                <p className='main-content-contact-subtitle subtitle'>
                    {subtitle}
                </p>
            </Fade>

            <Fade bottom>
                <div className='main-content-contact-details'>
                    <div className='main-content-contact-img'></div>

                    <div className='main-content-contact-form'>
                        {/* <h1>Contact</h1> */}
                        <form onSubmit={handleSubmit}>
                            <div className='main-content-contact-name copy-description'>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    placeholder="First Name"
                                    onChange={handleInputChange} 
                                    value={firstName} 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    placeholder="Last Name"
                                    onChange={handleInputChange} 
                                    value={lastName} 
                                    required 
                                />
                            </div>
                            <div className='main-content-contact-e-address copy-description'>
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email Address"
                                    onChange={handleInputChange} 
                                    value={email} 
                                    required 
                                />
                            </div>
                            <div className='main-content-contact-subject copy-description'>
                                <input 
                                    type="text" 
                                    name="subject" 
                                    placeholder="Subject"
                                    onChange={handleInputChange} 
                                    value={subject} 
                                    required 
                                />
                            </div>
                            <div className='main-content-contact-message copy-description'>
                                <textarea 
                                    name="message" 
                                    placeholder="Your Message Here"
                                    onChange={handleInputChange} 
                                    value={message} 
                                    required 
                                />
                            </div>
                            {/* <input type="submit" value="Send"/> */}
                            <div className='main-content-contact-submit' style={submitStyle}>
                                <Btn3d 
                                    btnType={'inputSubmit'} 
                                    btnValue={'SEND'} 
                                />
                            </div>
                        </form>
                    </div>

                </div>
            </Fade>
        </div>
    );
}

export default MainContentContact;