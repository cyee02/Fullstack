import React from 'react'

const Course = ({courses}) => {
    
    const courseOutput = courses.map( function(course) {

        const totalExercises = course.parts.reduce( (sum, numExercise) => 
            sum + numExercise.exercises, 0
        )

        const partOutput = course.parts.map( function(part){

            return(
                <div key={part.id}>
                    {part.name} {part.exercises}
                </div>
            )
        })

        return(
            <div key={course.id}>
                <h1>{course.name}</h1>
                {partOutput}
                total of {totalExercises} exercises
            </div>
        )
    })

    return (
        <div>
            {courseOutput}
        </div>
    )
}


export default Course