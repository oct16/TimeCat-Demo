import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Form from '../components/Form'

import React, { Component } from 'react'

import { Recorder } from 'timecatjs'
export default class Record extends Component {
    recorder?: Recorder
    async componentDidMount() {
        this.recorder = new Recorder()
    }
    async componentWillUnmount() {
        this.recorder?.destroy()
    }
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/record">Record Home</Link>
                        </li>
                        <li>
                            <Link to="/record/form">Record Form</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/record" component={Home}></Route>
                        <Route path="/record/form" component={Form}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
