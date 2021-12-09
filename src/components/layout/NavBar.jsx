import React, { Component } from 'react'
import styled from 'styled-components';

export default class NavBar extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-md navbar-dark fixed-top"
               style={{height: '5em'}}
               >
              <p className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'
              style={{color:'black', marginLeft:'2rem'}}
              >
              ReactDex
              </p>
              </nav>
            </div>
        )
    }
}
