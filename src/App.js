import './App.css';
import Fav from './Fav';
import Home from './Home';
import RandomQuote from './RandomQuote'
import axios from 'axios';
import React, {Component} from 'react';


import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

 class App extends Component {


  constructor(props){
    super(props)
    this.state = {
      mylist: [],
    }
  }

 /*  clearList = (e) => {
    this.setState({
      myList: []
    });
  } */


  myList = (listItem)=> {
    this.setState({
      mylist: [...this.state.mylist, listItem]
    })
  }
  
  clearAll = () =>{
  this.setState({
    mylist: [],
  })
  }

  clearItem = (qoute) => {
    const mylist = this.state.mylist; //copy of original 
    const indexx = mylist.indexOf(qoute); //where is the qoute
    mylist.splice(indexx, 1)
    this.setState({mylist})
}


 render() {
    return (

     
<Router>
        
          <nav className="navbar navbar-expand-lg p-3 p-3 mb-2 bg-warning ">

          <Link className="navbar-brand text-white"  to="/">Home</Link>
          <Link className="navbar-brand text-white" to="/randomQuote">Quote of the Day</Link>
          <Link className="navbar-brand text-white" to="/fav">Favorites</Link>
              
          </nav>
           
         <div>
         <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/randomQuote' component={()=> <RandomQuote myList={this.myList} />} />
           <Route path= '/fav' component={()=> <Fav clearAll={this.clearAll} mylist={this.state.mylist} clearItem={this.clearItem}/> } />
         </Switch>
         </div>
    
    </Router>
    );
 }
}
 


export default App;