import React from 'react'
import about from '../Images/profile.jpeg';
import {Link} from 'react-router-dom';
import { Button, Linking } from 'react-native';

function ImageSection() {
    
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span> Pruthvi Raj Dudam</span></h4>
                <p className="about-text">
                    A Senior at Arizona State University.
                    I will be graduating in December 2021 with Bachelors in Computer Science.
                    My interests lie in Deep Learning and Web/App Development and Design. 
                    I aspire to become a Software Developer and showcase my skills, while growing in a diverse work place.
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
                        <p>: Java, Python, C++, C, JavaScript, HTML, Swift/C-objective</p>
                        <p>: MySQL, Junit, Selenium, Junit, Linux, CSS, React.js, Node.js </p>
                        <p>: Java-8 Oracle Certification Associate</p>
                        <p>: Austin, TX</p>   
                    </div>
                </div>
                <Link onClick={()=>{Linking.openURL('https://drive.google.com/file/d/1Tqub7aeMQiqDCv8OhtCoGH8R7vek0tSd/view?usp=sharing')}}>
                    <button className="btn">
                        RESUME
                </button>
                </Link>
            </div>
        </div>
    )
}


export default ImageSection;
