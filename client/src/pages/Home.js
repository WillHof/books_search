import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
// import { List, ListItem } from "../components/bookreturn"
class Home extends Component {
    state = {
        Books: [],
        iTitle: "",
    };


    saveBook = (data) => {
        axios.post("/api/addBook", data)
    }
    handleInputChange = e => {
        console.log(e.target)
        this.setState({
            iTitle: e.target.value
        })
    }

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
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={this.handleInputChange} value={this.state.iTitle} />
                    </div>
                </div>
            </div>

        )
    }
}
export default Home