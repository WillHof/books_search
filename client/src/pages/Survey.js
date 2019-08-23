import React, { Component } from "react";
import { Link } from "react-router-dom";
class Survey extends Component {
    state = {
        Survey: "survey"
    }
    render() {
        return (
            <div>
                {this.state.Survey}
            </div>
        )
    }
}

export default Survey