import React from 'react';
import style from '../../style/style.js'

class Logo extends React.Component {
  render() {
    console.log(style.logoText);
    return (
        <div>
            {/* <img src={require('./logo_black.jpg')} style={style.logo} alt="Millennials Complaining"/> */}
            <h2 style={style.logoText}>millennials
            <br></br><span style={style.logoSpacer}></span>
            complaining.</h2>
            
            
        </div>
    )
  }
}

export default Logo;