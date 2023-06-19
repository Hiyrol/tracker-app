import React from 'react'
import Task from './Task'
// const tasks = [
//     {
//         id: 1,
//         text: 'Teach HTML',
//         day: 'Sept 6 at 9:23am',
//         reminder: true
//     },
//     {
//         id: 2,
//         text: 'Teach javaScript',
//         day: 'Sept 7 at 10:23am',
//         reminder: true
//     },
//     {
//         id: 3,
//         text: 'Teach react',
//         day: 'Sept 8 at 11:23am',
//         reminder: false
//     }
//  ]
 const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        tasks.map((task) => {
            return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>       
         })
        
    )
}


export default Tasks