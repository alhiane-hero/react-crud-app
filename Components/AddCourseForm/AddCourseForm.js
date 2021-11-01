import './AddCourseForm.css';

const AddCourseForm = props => {
    const {getInputValue, addCourse, current} = props;
    return (
        <form action='#' onSubmit={addCourse}>
            <input type='text' value={current} onChange={getInputValue} />
            <input type='submit' value='Add Course' />
        </form>
    );
}

export default AddCourseForm;