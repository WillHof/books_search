import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { List, ListItem } from "../components/bookreturn"
// import { List, ListItem } from "../components/bookreturn"
class Home extends Component {
    state = {
        Books: "Search for a book above",
        iTitle: "",

    };
    saveBook = (data) => {
        axios.get("/api/book", data)
    };
    handleInputChange = e => {
        this.setState({
            iTitle: e.target.value
        })
    };
    searchBook = (e) => {
        e.preventDefault()
        axios.post("/api/gSearch", {
            "name": this.state.iTitle
        }).then(res => {
            this.setState({ "Books": res.data })
        })
    }
    handleClick = () => {
        axios.post("/api/books", {
            "title": this.state.Books.volumeInfo.title,
            "authors": this.state.Books.volumeInfo.authors,
            "image": this.state.Books.volumeInfo.imageLinks.smallThumbnail,
            "link": this.state.Books.selfLink,
            "description": this.state.Books.volumeInfo.description
        }).then(this.setState({ "Books": "Saved Succesfully" }))
    }
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <p>Search for a book you like</p>
                    <hr className="my-4" />
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm" onClick={this.searchBook} >Search</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={this.handleInputChange} value={this.state.iTitle} />
                    </div>
                </div>
                {this.state.Books.volumeInfo ? (
                    <List>
                        <ListItem>
                            <div >
                                <h4>{this.state.Books.volumeInfo.title}</h4> <span>by <strong>{this.state.Books.volumeInfo.authors}</strong></span>
                                <p><strong>Description:</strong> {this.state.Books.volumeInfo.description}</p>
                            </div>
                            <a className="btn btn-info" href={this.state.Books.selfLink}>Link to book</a>
                            <button className="btn btn-info" onClick={this.handleClick}>Save the book to your library</button>
                        </ListItem>
                    </List>) : (<h3>{this.state.Books}</h3>)
                }
            </div>
        )
    }
}
export default Home