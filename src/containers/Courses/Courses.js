import React, { Component } from 'react';

import Course from '../Course/Course';
import { Route, Link } from 'react-router-dom';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseSelectedHandler = (course) => {
        this.props.history.push('/courses/' + course.id + '/' + course.title)
    }

    render () {
        console.log(this.props.match.url)
        let courses = 
            this.state.courses.map( course => {
                return (
                <Link key={course.id}
                    to={{
                        pathname: '/courses/' + course.id,
                        search: 'title='+ course.title
                    }} style={{textDecoration:"none"}}>
                    <article className="Course" 
                                >
                                {/* onClick={() => this.courseSelectedHandler(course)}> */}
                                {course.title}
                                </article>;
                </Link>
                )
            } )
         
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                   {courses}
                </section>
                <Route path={this.props.match.url + '/:id'} component={Course} />
            </div>
        );
    }
}

export default Courses;