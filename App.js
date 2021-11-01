import React, {Component} from 'react';
import AddCourseForm from './Components/AddCourseForm/AddCourseForm';
import CoursesList from './Components/CoursesList/CoursesList';
import {getCoursesFromLs, addCoursesToLs,
  deleteCoursesFromLs, editCoursesInLs} from './Components/Storage/Storage';
import './App.css';

class App extends Component {

  state = {
    courses: getCoursesFromLs(),
    current: ''
  }

  getInputValue = event => {
    this.setState({current: event.target.value});
  }

  addCourse = event => {
    event.preventDefault();
    const current = this.state.current;
    const courses = this.state.courses;
    courses.push({name: current});
    addCoursesToLs({name: current});
    this.setState({courses, current: ''});
  }

  updateCourse = (index, value) => {
    const courses = this.state.courses;
    const course = courses[index];
    course['name'] = value;
    this.setState({courses});
    editCoursesInLs(index, value);
  }

  deleteCourse = (index) => {
    const courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({courses});
    deleteCoursesFromLs(index);
  }

  render() {
    const {courses} = this.state;
    const getAllCourses = courses.map((course, index) => {
      return (
        <CoursesList courseName={course.name} index={index} key={index} 
        deleteCourse={this.deleteCourse} updateCourse={this.updateCourse} />
      );
    });

    return (
      <div className="App">
        <h2 className='title'>Crud App - Courses</h2>
        <AddCourseForm getInputValue={this.getInputValue}
        addCourse={this.addCourse} current={this.state.current}/>
        <ul className='courses'>
          {getAllCourses}
        </ul>
      </div>
    );
  }
}

export default App;
