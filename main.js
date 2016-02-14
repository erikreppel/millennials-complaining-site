import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App/App.jsx'
import Podcasts from './components/Podcasts/Podcasts.jsx'


render((
    <Router>
        <Route path="/" component={App}>
            <Route path="podcasts" component={Podcasts}/>
        </Route>
    </Router>
    ), document.getElementById('content'))