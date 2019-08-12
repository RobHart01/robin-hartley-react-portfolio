import React from 'react';
import './Contact.css';
import Github from '../../Assets/Images/github-icon.png';
import LinkedIn from '../../Assets/Images/linkedin-icon.png';

function Contact() {
    return (
        <div className="Contact">
            <p className="contact-title">Contact</p>
            <div className="contact-content-wrapper">
                <p className="contact-content-1">If you would like to work with me or to just ask questions, I'm always open to them!</p>
                <div className="contact-social-links">
                    <p className="contact-social-content">Add/Follow me on!</p>
                    <a href="https://www.linkedin.com/in/robin-hartley/"><img className="contact-social-linkedin" src={LinkedIn} alt="linkedin icon" /></a>
                    <a href="https://github.com/RobHart01"><img className="contact-social-github" src={Github} alt="github icon" /></a>
                </div>

                <form className="contact-form">
                    <label>
                        Message:<br />
                        <textarea rows="4" cols="50">
                        </textarea>
                    </label><br />
                    <label>
                        First Name:<br />
                        <input type="text" name="First name" />
                    </label><br />
                    <label>
                        Last Name:<br />
                        <input type="text" name="First name" />
                    </label><br />
                    <label>
                        Email:<br />
                        <input type="text" name="First name" />
                    </label><br />
                    <input className="contact-button" type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact;