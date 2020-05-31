import React from 'react'
import { GlobalWrapper } from './style'
import Home from '../Home'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <Router>
                <GlobalWrapper>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </GlobalWrapper>
            </Router>
        )
    }
}


export default App
