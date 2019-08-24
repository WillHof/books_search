import React, { Component } from "react";
import axios from "axios";
import { List, ListItem } from "../components/bookreturn"
class Survey extends Component {
    state = {
        Books: [],
        iTitle: "",
    };
    componentDidMount() {
        this.loadBooks()
    }
    loadBooks = () => {
        axios.get("/api/books")
            .then(res => {
                this.setState({ Books: res.data, iTitle: "" })
            }).catch(err => console.log(err));
    };
    handleClick = (id) => {
        axios.delete("/api/books", {
            params: { "_id": this.state.Books._id }
        }
        )
    }
    render() {
        return (
            <div>
                <List>
                    <h3>Saved Books:</h3>
                    {this.state.Books.map(book => (
                        <ListItem key={book._id}>
                            <div >
                                <h4>{book.title}</h4> <span>by <strong>{book.authors}</strong></span>
                                <p><strong>Description:</strong> {book.description}</p>
                            </div>
                            <a className="btn btn-info" href={book.link}>Link to book</a>
                            <button className="btn btn-danger" onClick={() => this.handleClick(book._id)}>Remove the book from your library</button>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
}

export default Survey