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
    render() {
        return (
            <div>
                <div class="jumbotron">
                    <p>Search for a book you like</p>
                    <hr class="my-4" />
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Search</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                </div>
                <List>
                    <h3>Saved Books:</h3>
                    {this.state.Books.map(book => (
                        <ListItem key={book._id}>
                            <h4>{book.title}</h4> <span>by <strong>{book.authors}</strong></span>
                            <p><strong>Description:</strong> {book.description}</p>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
}

export default Survey