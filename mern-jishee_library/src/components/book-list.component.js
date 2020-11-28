import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Book = props => (
  <tr>
    <td>{props.book.bookname}</td>
    <td>{props.book.description}</td>
    <td>{props.book.rating}</td>
    <td>{props.book.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.book._id}>edit</Link> | <a href="#" onClick={() => { props.deleteBook(props.book._id) }}>delete</a>
    </td>
  </tr>
)

export default class BookList extends Component {
  constructor(props) {
    super(props);

    this.deleteBook = this.deleteBook.bind(this)

    this.state = {book: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/book/')
      .then(response => {
        this.setState({ book: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteBook(id) {
    axios.delete('http://localhost:5000/book/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      book: this.state.book.filter(el => el._id !== id)
    })
  }

  bookList() {
    return this.state.book.map(currentexercise => {
      return <Book book={currentexercise} deleteBook={this.deleteBook} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <div style={{fontSize: "20px",textAlign:"center",fontWeight:"bold"}}>
            Welcome to my Library
        </div>
        <h3>Book list</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Book Name</th>
              <th>Description</th>
              <th>Rating</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.bookList() }
          </tbody>
        </table>
      </div>
    )
  }
}