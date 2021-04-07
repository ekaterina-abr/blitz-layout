import React from 'react'
import './PhotoContent.scss'
import JasonWood from '../../images/JasonWood.jpg'

const PhotoContent = () => {
    return (
        <div className='PhotoContent'>
            <img src={JasonWood} alt='Jason_Wood'/>
            <article>
                <h1>ABOUT ME</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  
                do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                Duis aute irure dolor in reprehenderit in voluptate velit <br/>
                esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <h4>Jason Wood</h4>
            </article>
        </div>
    )
}

export default PhotoContent