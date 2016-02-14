import React from 'react';
import { Link } from 'react-router';
import style from '../../style/style.js'

import Navigation from '../Navigation/Navigation.jsx'
import Logo from '../Logo/Logo.jsx'

class App extends React.Component {
  render() {
    return (
        <div>
        <Navigation/>
        <Logo />
        <p style={style.tagLine}>A podcast about life, politics, and the world. Hosted by a bunch of 22 year olds.</p>
        </div>
    )
  }
}

export default App;