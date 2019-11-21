import React, { Component } from 'react'
import Search from '../Search/Search'
import './Gradient.scss'

export default class Layout extends Component {
    constructor (props) {
        super(props);
        this.state = {
          animationClass: 'test'
        }
        this.changeState = this.changeState.bind(this);
      }
      changeState(){
        if(this.state.animationClass === 'test'){
          this.setState({
            animationClass: 'test paused'
          });
        }else{
          this.setState({
            animationClass: 'test'
          });
        }
      }
    render() {
        return (
         
        <div className={this.state.animationClass}>
          <div className="search">
            <Search ></Search>
          </div>
        </div>
        )
    }
}