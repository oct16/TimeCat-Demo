import React, { Component } from 'react'

import { Player, RecordData } from 'timecatjs'
export default class Replay extends Component {
    player?: Player
    async componentDidMount() {
        const records = await this.getRecords()
        this.player = new Player({
            target: '.timecat-replay',
            records
        })
    }
    async componentWillUnmount() {
        this.player?.destroy()
    }

    getRecords() {
        return fetch('http://localhost:5000/records').then(res => res.json()) as Promise<RecordData[]>
    }

    render() {
        return (
            <div>
                <h2>Replay</h2>
                <div className="timecat-replay" style={{ margin: '0 auto', height: 'calc(100vh - 130px)' }}></div>
            </div>
        )
    }
}
