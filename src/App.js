import React, { Component } from 'react'
import './App.css'

export default class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resume: null,
        }
    }

    componentDidMount() {
        console.log('The  component  mounted')
        fetch('https://lovelylabs.herokuapp.com/resume')
            .then((response) => response.json())
            .then((data) => this.setState({ data }))
    }
    render() {
        console.log(this.state)
        return (
            <div className='App'>
                <h1>Hello, World!</h1>
                <p>This is a change that I want to see on the real web.</p>
                <p>Make static character sheets</p>
                <p>Make a simple dice roller</p>
                <p>Dice rolling should take the standard notation.</p>
                <p>Setup routing for the character pages</p>
                <p>Just take things step by step</p>
                <h2>NaviNari</h2>
                <h2>FuNari</h2>
                <h2>Vinny Copulious</h2>

                <p>How should the dice roller work?</p>
                <p>I don't know if I can get excited about anything right now.</p>
                <p>I don't know why I do this to myself.</p>
            </div>
        )
    }
}
