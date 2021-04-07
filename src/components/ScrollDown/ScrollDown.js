import React from 'react'
import './ScrollDown.scss'
import DoubleArrow from '../../images/DoubleArrow.svg'

const ScrollDown = () => {
    return (
        <div className='ScrollDown'>
            <p>SCROLL DOWN TO SEE MORE</p>
            <img src={DoubleArrow} alt='double_arrow'/>
        </div>
    )
}

export default ScrollDown