import React, { Component } from 'react'

import { Player } from 'timecatjs'
export default class Replay extends Component {
    player?: Player
    async componentDidMount() {
        this.player = new Player({
            target: '.timecat-replay'
        })
    }
    async componentWillUnmount() {
        this.player?.destroy()
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
