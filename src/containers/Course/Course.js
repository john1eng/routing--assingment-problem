import React, { Component } from 'react';

class Course extends Component {
    state = {
        paramTitle: null
    }
    componentDidMount() {
        this.parseQuery();
        
    }

    componentDidUpdate() {
        this.parseQuery();
    }

    parseQuery() {
        const query = new URLSearchParams(this.props.location.search);
        
        for (let param of query.entries()){
            if(this.state.paramTitle !== param[1])
            this.setState({paramTitle: param[1]})
        }
    }

    render () {
        console.log(this.props)
        
        return (
            <div>
                <h1>{this.state.paramTitle}</h1>
                <p>{'You selected the Course with ID: ' + this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;