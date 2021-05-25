import React, { Component } from 'react'
import Firstpost from './Firstpost'
import Cats from './Cats'
import './style.css'



export default class Post extends Component {
    render() {
        return (
            <div className="conva">

<Firstpost />

<Cats />

            </div>
        )
    }
}
