import React from 'react';
import { Col, Row } from 'react-bootstrap';

import style from '../../style/style.js'
import Logo from '../Logo/Logo.jsx';

class Navigation extends React.Component {
  render() {
    return (
        <div>
            <Row>
                <Col xs={12} md={12}>
                    <div style={style.navItems}>
                        <a href={'/https://soundcloud.com/millennialscomplaining'} style={style.navLink}>Podcasts</a>
                        <span style={style.spacer}></span>
                        <a href={'/blog'} style={style.navLink}>Blog</a>
                        <span style={style.spacer}></span>
                        <a href={'/about'} style={style.navLink}>About</a>
                    </div>
                </Col>
            </Row>
            <hr></hr>
        </div>
    )
  }
}

export default Navigation;