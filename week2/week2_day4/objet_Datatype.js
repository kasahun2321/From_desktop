let student={
    name: "John",
    id: 123,
    course_completed: ['CS301', 'CS303'],
    is_accelerated_track: true,
    getCourseCount: function(){return this.course_completed.length}
    }

    courseCount = student.getCourseCount();

    console.log(courseCount)