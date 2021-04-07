import React, {Component} from 'react'
import Home from './containers/Home/Home'
import AboutMe from './containers/AboutMe/AboutMe'
import './App.scss'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Home/>
                <AboutMe/>
            </div>
        )
    }
}

export default App