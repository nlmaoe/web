import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditBook extends Component {
  constructor(props) {
    super(props);

    this.onChangeBookname = this.onChangeBookname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      bookname: '',
      description: '',
      rating: 0,
      date: new Date(),
      book: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/book/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          bookname: response.data.bookname,
          description: response.data.description,
          rating: response.data.rating,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/library/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            book: response.data.map(book => book.bookname),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeBookname(e) {
    this.setState({
      bookname: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      rating: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const book = {
      bookname: this.state.bookname,
      description: this.state.description,
      rating: this.state.rating,
      date: this.state.date
    }

    console.log(book);

    axios.post('http://localhost:5000/book/update/' + this.props.match.params.id, book)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Book Detail</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Book name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.bookname}
              onChange={this.onChangeBookname}>
              {
                this.state.book.map(function(book) {
                  return <option 
                    key={book}
                    value={book}>{book}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Rating: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.rating}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit book detail" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}