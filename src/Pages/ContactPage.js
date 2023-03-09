import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../Images/phone.svg';
import email from '../Images/emailme.svg';
import Title from '../Components/Title';
import {Link} from 'react-router-dom';
import { Linking } from 'react-native';

function ContactPage() {
    return (
        
        <div>
            <div className="title">
                <Title title={'Contact Me'} />
            </div>
            <div className="ContactPage">
            <div className="contact-sect">
                <ContactItem icon={phone} text={'+1 571-705-5240'} title={'Phone'}/>
                <Link onClick={()=>{Linking.openURL('mailto: pruthvidudam43@gmail.com')}}>
                <ContactItem icon={email} text={'pruthvidudam43@gmail.com'} title={'Email'}/>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default ContactPage
