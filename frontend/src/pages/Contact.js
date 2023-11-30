import React from 'react';
import './Pages.css';

export default function Contact() {

    return (
        <div className='contact-area'>
            <span className='contact-area__form'>
                <h3>Contact form</h3>

                <form action="https://formsubmit.co/alfamotors.kontakt@gmail.com" method="POST">
                    <input type="text" name="NAME" placeholder='NAME' required/>
                    <input type="text" name="LAST NAME" placeholder='LAST NAME' required/>
                    <input type="text" name="PHONE NUMBER" placeholder='PHONE NUMBER' />
                    <input type="email" name="EMAIL ADDRESS" placeholder='EMAIL ADDRESS' required/>
                    <textarea type="text" name="CONTENTS" placeholder='CONTENTS' required rows='4' />

                    {/* Button replaced with <p> for Safari browser */}
                    <input id='contact-area__button' type='submit' value='SUBMIT' />

                    <input type="hidden" name="_subject" value="Klient przysłał zapytanie"></input>
                    <input type="hidden" name="_next" value="https://alfamotors.pl/thanks"></input>
                </form>
            </span>

            <span className='contact-area__info'>
                <h3>Contact information</h3>
                
                <div>
                    <img src={require('../assets/phoneIcon.png')} alt="Wiarygodni dealerzy samochodów używanych" />
                    <span>Phone: +1 204 894 6024</span>
                </div>
                <div>
                    <img src={require('../assets/email.png')} alt="Używane auta dobrej jakości" />
                    <span>E-mail: coltpirates187@gmail.com</span>
                </div>
                <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11533.606091769656!2d-79.85888118015454!3d43.72298504683007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b115efcab4e1d%3A0x3be53fec574542c3!2s96%20Eberly%20Wds%20Dr.%2C%20Caledon%2C%20ON%20L7C%204J4!5e0!3m2!1sen!2sca!4v1701275863816!5m2!1sen!2sca"></iframe>
            </span>        
        </div>
    )
}