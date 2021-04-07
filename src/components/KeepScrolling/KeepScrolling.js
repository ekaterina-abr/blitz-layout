import React from 'react'
import './KeepScrolling.scss'
import DoubleArrow from '../../images/DoubleArrow.svg'

const KeepScrolling = () => {
    return (
        <div className='KeepScrolling'>
            <p>KEEP SCROLLING, THERE IS STILL MORE TO COME.</p>
            <img src={DoubleArrow} alt='double_arrow'/>
        </div>
    )
}

export default KeepScrolling
