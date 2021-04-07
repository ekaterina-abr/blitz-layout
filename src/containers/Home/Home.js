import React, {Component} from 'react'
import './Home.scss'
import Menu from '../../components/Menu/Menu'
import ScrollDown from '../../components/ScrollDown/ScrollDown'

class Home extends Component {
    render() {
        return (
            <div className='Home'>
                <Menu/>
                <ScrollDown/>
            </div>
        )
    }
}

export default Home