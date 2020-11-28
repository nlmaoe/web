import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
from '@material-ui/core';
import './userList.css';
import axios from 'axios'

import Badge from '@material-ui/core/Badge';
/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      photoNumber: [],
      totalComment: []
    };
  }

  componentDidMount(){
    axios.get("http://localhost:3000/user/list").then(response => response.data).then(data => {
        this.setState({list: data})
        data.map( item =>{axios.get("http://localhost:3000/photosOfUser/"+ item._id).then(response => response.data).then(data1 => {
              this.state.photoNumber.push(data1.length);
            let count = 0;
            data1.map( item1 => {count = count + item1.comments.length})
            this.state.totalComment.push(count)
            this.setState({totalComment: this.state.totalComment})
          })
          this.setState({photoNumber:this.state.photoNumber})
        })
      });

}

  render() {
    return (
      <div>
        {this.state.list.map((i,index) => {
          return (
            <List key={i._id}>
              <ListItem component={Link} to={"/users/" + i._id}>
                <ListItemText primary={i.first_name + " " + i.last_name}/>
                  <Badge badgeContent={this.state.photoNumber[index]} color="primary">
                  </Badge>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Badge  component={Link} to={"/commka/" + i._id} badgeContent={this.state.totalComment[index]} color="secondary">
                  </Badge>
              </ListItem>
            </List>
          );
        })}
        <Typography variant="body1">
        </Typography>
      </div>
    );
  }
}

export default UserList;
