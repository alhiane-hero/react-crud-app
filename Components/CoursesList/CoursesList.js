import React, {Component} from 'react';
import './CoursesList.css';

class CoursesList extends Component {

    state = {
        isEdit: false
    }

    toggleState = _ => {
        this.setState({isEdit: !this.state.isEdit});
    }

    renderCourse = _ => {
        const {courseName, index, deleteCourse} = this.props;
        return (
            <li className='course'>
                <span className='course_name'>{courseName}</span>
                <div className='operations'>
                    <button onClick={this.toggleState}>Edit Course</button>
                    <button onClick={_ => deleteCourse(index, courseName)}>
                        Delete Course
                    </button>
                </div>
            </li>
        );
    }

    submitForm = event => {
        event.preventDefault();
        const {updateCourse, index} = this.props;
        updateCourse(index, this.input.value);
        this.toggleState();
    }

    renderUpdateForm = _ => {
        const {courseName} = this.props;
        return (
            <form action='#' onSubmit={this.submitForm}>
                <input type='text' ref={(v) => {this.input = v}} 
                defaultValue={courseName} />
                <input type='submit' value='Update Course' />
            </form>
        );
    }

    render () {
        const isEdit = this.state.isEdit;
        return (
            isEdit ? this.renderUpdateForm() : this.renderCourse()
        );
    }
}

export default CoursesList;