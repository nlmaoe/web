import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import BookList from "./components/book-list.component";
import EditBookDetail from "./components/edit-book.component";
import addBookDetail from "./components/add-bookdetail.component";
import CreateBook from "./components/create-book.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={BookList} />
      <Route path="/edit/:id" component={EditBookDetail} />
      <Route path="/create" component={addBookDetail} />
      <Route path="/library" component={CreateBook} />
      </div>
    </Router>
  );
}

export default App;
