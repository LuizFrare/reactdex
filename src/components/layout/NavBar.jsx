import React, { Component } from 'react'
import reactdex from '../layout/reactdex.png'

export default class NavBar extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-md navbar-dark fixed-top"
               style={{height: '5em'}}
               >
            <>
            <img
              style={{marginLeft:'2rem', marginTop:'1rem', width:"15rem"}}
              src={reactdex}
              alt='ReactDex'
              />
            </>
              </nav>
            </div>
        )
    }
}
