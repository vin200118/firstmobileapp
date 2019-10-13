import React,{Component} from 'react'
import {render} from 'react-dom'

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

import app from './home/app.jsx'


class Main extends Component{
    render(){
        return(
                <div>
                <nav className="navbar navbar-light">
                  <ul className="nav navbar-nav">

                 
                   
                    <li><Link to="/">IONIC</Link></li>
                   
                     </ul>
                 </nav>
                 <Route path="/" component={app}/>
                    
        		</div>
        	);
       
    }
}

export default Main;

