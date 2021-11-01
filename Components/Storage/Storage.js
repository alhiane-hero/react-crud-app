export function addCoursesToLs(newCourse) {
    const lsCourses = getCoursesFromLs();
    localStorage.setItem('course', JSON.stringify(
        [...lsCourses, newCourse]
    ));
}

export function editCoursesInLs(index, value) {
    const lsCourses = getCoursesFromLs();
    const course = lsCourses[index];
    course['name'] = value;
    localStorage.setItem('course', JSON.stringify(lsCourses));
}

export function deleteCoursesFromLs(index) {
    const lsCourses = getCoursesFromLs();
    lsCourses.splice(index, 1);
    localStorage.setItem('course', JSON.stringify(lsCourses));
}

export function getCoursesFromLs() {
    const lsCourses = JSON.parse(localStorage.getItem('course'));
    return localStorage.getItem('course') !== null ? lsCourses : [];
}