import React, { Component } from 'react'
import './AboutMe.scss'
import Menu from '../../components/Menu/Menu'
import PhotoContent from '../../components/PhotoContent/PhotoContent'
import KeepScrolling from '../../components/KeepScrolling/KeepScrolling'

class AboutMe extends Component {
    render() {
        return (
            <div className='AboutMe'>
                <Menu/>
                <PhotoContent/>
                <KeepScrolling/>
            </div>
        )
    }   
}

export default AboutMe