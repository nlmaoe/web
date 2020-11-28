import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      page:"",
      name:"",
      listItems123: [],
    }
  }

  render() {
    var name;
    var page;

    if(window.location.href.slice(40, 45) === "users"){
      axios.get('http://localhost:3000/user/'+window.location.href.slice(46, 70)).then((response) => {
        this.setState({listItems123: response.data[0]})
      }).catch((error)=>{
        console.log(error);
     });
     name = this.state.listItems123.first_name;
     page ="User detail of ";
    }
    else if(window.location.href.slice(40, 45) === "photo"){
      axios.get('http://localhost:3000/user/'+window.location.href.slice(47, 71)).then((response) => {
        this.setState({listItems123: response.data[0]})
      }).catch((error)=>{
        console.log(error);
     });
     name = this.state.listItems123.first_name;
     page ="Photos of  ";
   }
   else{
     page = "User list "
     name = "";
   }

    return (
      
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
              ma
          </Typography>
          <Typography variant="h5" color="inherit">
              {page + " " + name}
          </Typography>
        </Toolbar>
      </AppBar>
    );
    }
}

export default TopBar;
