import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import Form from '../components/Form'

import React, { Component } from 'react'

import { RecordData, Recorder } from 'timecatjs'
export default class Record extends Component {
    recorder?: Recorder
    async componentDidMount() {
        await this.clearService()
        this.recorder = new Recorder()
        this.recorder.onData(record => {
            addRecord(record)
        })

        const upLoader = (options = { interval: 5000, max: 30 }) => {
            const records = [] as RecordData[]
            const { max, interval } = options
            let timer: number | undefined
            const self = this

            return function (record?: RecordData) {
                if (record) {
                    records.push(record)
                }
                if (!timer && records.length) {
                    timer = window.setTimeout(uploadRecords, interval)
                }
            }

            async function uploadRecords() {
                clearTimeout(timer as number)
                timer = undefined
                const maxIndex = Math.min(max, records.length)
                return self.uploadService(records.slice(0, maxIndex)).then(() => {
                    records.splice(0, maxIndex)
                    if (records.length) {
                        addRecord()
                    }
                })
            }
        }

        const addRecord = upLoader()
    }

    async componentWillUnmount() {
        this.recorder?.destroy()
    }

    uploadService(records: RecordData[]) {
        return fetch('http://localhost:5000/records', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(records)
        })
    }

    clearService() {
        return fetch('http://localhost:5000/records', {
            method: 'delete'
        })
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
