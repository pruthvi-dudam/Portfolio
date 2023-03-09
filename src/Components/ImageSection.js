import React from 'react'
import about from '../Images/profile.jpeg';
import {Link} from 'react-router-dom';
import { Linking } from 'react-native';

function ImageSection() {
    
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span> Pruthvi Raj Dudam</span></h4>
                <p className="about-text">
                    I currently working as a software developer in General Motors, focused in Frontend web development and test automation.
                    Graduated in December 2021 with Bachelors in Computer Science.
                    I am looking for new oppurtunites to enhance my tech skills and develop complex features, while working with an experienced team in a SAFe agile environment.
                    My goal is to become a Full Stack Software Engineer.
                    My interests and experience lie in Frontend development, IOS application development, Machine Learning and Test Automation
                    
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Programming</p>
                        <p></p><p></p><p></p>
                        <p>Technology/Tools</p>
                        <p></p><p></p><p></p>
                        <p>Certifications</p>
                        <p>Address</p>
                        
                    </div>
                    <div className="right-section">
                        <p>: Java · TypeScript · JavaScript · C/C++ · HTML · SCSS · Python · SQL</p>
                        <p>: Angular 2 · React · Node.js · Selenium · Junit · MySQL · MogoDB · AWS · Kafka · Docker · Kubernetes · .NET framework · Azure </p>
                        <p>: Java-8 Oracle Certification Associate</p>
                        <p>: Austin, TX</p>   
                    </div>
                </div>
                <Link onClick={()=>{Linking.openURL('https://docdro.id/Jm3WipY')}}>
                    <button className="btn">
                        RESUME
                </button>
                </Link>
            </div>
        </div>
    )
}


export default ImageSection;