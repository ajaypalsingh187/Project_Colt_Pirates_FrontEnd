import React from 'react';
import './Pages.css';

export default function Buy() {
    return (
        <div id="Buy">
            <div id="Buy__area">
                <h3>Purchase  Form</h3>
                <p>If you are interested in buying car and trading in vehicle, please contact us by phone or fill out and send the form below, including the basic data of the vehicle, your own description, and illustrative photos.</p>

                {/* enctype has been set for sending images */}
                <form action="https://formsubmit.co/alfamotors.contact@gmail.com" method="POST" encType="multipart/form-data"> 
                    <span className='column-inputs'>
                        <input type="text" name="Name" placeholder='Name' required/>
                        <input type="text" name="Last Name" placeholder='Last Name' required/>
                        <input type="text" name="Phone number" placeholder='Phone number' />
                        <input type="email" name="Email address" placeholder='Email address' required/>
                        <input type="text" name="Proposed price" placeholder='Proposed price'/>
                    </span>

                    <span className='column-inputs'>
                        <input type="text" name="Brand and model" placeholder='Brand and model' required/>
                        <input type="text" name="Year of production" placeholder='Year of production' required/>
                        <input type="text" name="Engine version" placeholder='Engine version' required/>
                        <input type="text" name="Mileage" placeholder='Mileage' required/>
                        <input type="text" name="Country" placeholder='Country of origin' required/>
                    </span>

                    <span id='third-span'>
                        <textarea type="text" name="Message" placeholder='Custom vehicle description/comment/note' required rows='4' />
                        <span id='third-span__attachments'>
                            <input type="file" name="Attachment 1" accept="image/png, image/jpeg"/>
                            <input type="file" name="Attachment 2" accept="image/png, image/jpeg"/>
                            <input type="file" name="Attachment 3" accept="image/png, image/jpeg"/>
                        </span>
                        {/* Button replaced with <input> for Safari browser */}
                        <input id='Buy__area__button' type='submit' value='Submit' />
                    </span>

                    <input type="hidden" name="_subject" value="Client Offer"></input>
                    <input type="hidden" name="_next" value="https://alfamotors.pl/thanks"></input>
                </form>
            </div>
        </div>
    )
}
