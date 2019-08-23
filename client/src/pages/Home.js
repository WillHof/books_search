import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    state = {
        Home: "something"
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <div class="jumbotron">
                    <p>{this.state.Home}</p>
                    <hr class="my-4" />
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Search</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                </div>
            </div>

        )
    }
}
export default Home