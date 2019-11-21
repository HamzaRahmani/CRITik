import React, { Component } from 'react'
import Search from '../Search/Search'
import './Gradient.scss'

export default class Layout extends Component {
    render() {
        return (
        <div className="back">
          <div className="search">
            <Search ></Search>
          </div>
        </div>
        )
    }
}