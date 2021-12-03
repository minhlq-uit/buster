import React, { useState, useEffect } from 'react';
import './Questions.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Answers from './Answers/Answers'


function Questions() {

    return (
        <div className='questions-container'>
            <div className='wrapper'>
                <h1>Frequently Asked Questions</h1>

                <Answers label="What is BUSTER?" >
                    <p> <b>Buster</b> is a subscription-based streaming service that allows our members to watch TV shows and movies without commercials on an internet-connected device.  </p>
                </Answers>

                <Answers label="How much does BUSTER cost?" >
                    <p> <b>Sign in</b> to your Account and select Billing details to see your Netflix plan and billing history. <br /> You can compare plans and pricing and change your plan at any time.  </p>
                </Answers>

                <Answers label="What can I watch on BUSTER?" >
                    <p> With <i>600+ movies</i> and more than <i>50 TV shows</i> available to subscribers, <b>Buster</b> is one of the local's most popular streaming services. <br /> The site caters for audiences of all demographics with a wide variety of genres.  </p>
                </Answers>
            </div>

        </div>
    );
}

export default Questions;
