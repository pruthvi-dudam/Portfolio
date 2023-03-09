import React from 'react';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {Linking } from 'react-native';


function HomePage() {
    return (
            <div className="HomePage">
                <header className="hero">
                    <h1 className="hero-text">
                        Hi, I'm Pruthvi Dudam
                    </h1>
                    <p className="h-sub-text">
                    Welcome to my Portfolio
                </p>
                <div className="icons">   
                    <Link onClick={()=>{Linking.openURL('https://linkedin.com/in/pruthvidudam')}} className="icon-holder">   
                        <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
                    </Link>
                    <Link onClick={()=>{Linking.openURL('https://github.com/pruthvi-dudam')}} className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link onClick={()=>{Linking.openURL('https://docdro.id/Jm3WipY')}}>
                    <button className="btn">
                        RESUME
                </button>
                </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
