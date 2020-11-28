import React from 'react';
import {
  Typography
} from '@material-ui/core';
import './userDetail.css';

import {
  Link
} from 'react-router-dom';


import Button from '@material-ui/core/Button';

import axios from 'axios';
import './userDetail.css';
/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems123: [],
    }
  }

  detailer(){

    axios.get('http://localhost:3000/user/'+this.props.match.params.userId).then((response) => {
       this.setState({listItems123: response.data[0]})
     })
    .catch((error)=>{
       console.log(error);
    });

    var listItems = this.state.listItems123;
    return(
      <div>
        <Typography color="secondary" variant="title" style={{ fontWeight : 'bold'}}>User Detail</Typography>
        <Typography color="textSecondary" variant="h6" style={{ fontWeight : 'bold'}}>Name :  {listItems.first_name + " "+ listItems.last_name}</Typography>
        <Typography color="textSecondary" variant="h6" style={{ fontWeight : 'bold'}}>Location : {listItems.location}</Typography>
        <Typography color="textSecondary" variant="h6" style={{ fontWeight : 'bold'}}>Description : {listItems.description}</Typography>
        <Typography color="textSecondary" variant="h6" style={{ fontWeight : 'bold'}}>Occupation : {listItems.occupation}</Typography>
        
        <Link to={"/photos/" +  this.props.match.params.userId} style={{ textDecoration: 'none' }}> 
          
          <Button variant="contained" color="secondary">
            Photos
          </Button>
        </Link>
      </div>
    )
	}

  render() {
    return (
      <div> 
       
       {this.detailer()}

     </div>
    );
  }
}

export default UserDetail;
