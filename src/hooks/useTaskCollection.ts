// 1 // this stores demo tasks initially

import { useLocalStorage } from 'usehooks-ts';  //provides easy access to local storage with type safety.

import { v4 as uuidv4 } from 'uuid';  //generate unique ids
import { ColumnType, DayType } from '../utils/enums';
import { TaskModel } from '../utils/models';

const initialTasks = {
    Monday: {
        Todo: [
            {
                id: uuidv4(),
                column: ColumnType.TO_DO,
                title: 'Monday Task 1',
                color: 'blue.300',
            },
        ],
        'In Progress': [
            {
                id: uuidv4(),
                column: ColumnType.IN_PROGRESS,
                title: 'Monday Task 2',
                color: 'yellow.300',
            },
        ],
        Blocked: [
            {
                id: uuidv4(),
                column: ColumnType.BLOCKED,
                title: 'Monday Task 3',
                color: 'red.300',
            },
        ],
        Completed: [
            {
                id: uuidv4(),
                column: ColumnType.COMPLETED,
                title: 'Monday Task 4',
                color: 'green.300',
            },
        ],
    },
    Tuesday: {
        Todo: [
            {
                id: uuidv4(),
                column: ColumnType.TO_DO,
                title: 'Tuesday Task 1',
                color: 'blue.300',
            },
        ],
        'In Progress': [
            {
                id: uuidv4(),
                column: ColumnType.IN_PROGRESS,
                title: 'Tuesday Task 2',
                color: 'yellow.300',
            },
        ],
        Blocked: [
            {
                id: uuidv4(),
                column: ColumnType.BLOCKED,
                title: 'Tuesday Task 3',
                color: 'red.300',
            },
        ],
        Completed: [
            {
                id: uuidv4(),
                column: ColumnType.COMPLETED,
                title: 'Tuesday Task 4',
                color: 'green.300',
            },
        ],
    },
    // Repeat for other days of the week
    Wednesday: {
        Todo: [
            {
                id: uuidv4(),
                column: ColumnType.TO_DO,
                title: 'Wednesday Task 1',
                color: 'blue.300',
            },
        ],
        'In Progress': [
            {
                id: uuidv4(),
                column: ColumnType.IN_PROGRESS,
                title: 'Wednesday Task 2',
                color: 'yellow.300',
            },
        ],
        Blocked: [
            {
                id: uuidv4(),
                column: ColumnType.BLOCKED,
                title: 'Wednesday Task 3',
                color: 'red.300',
            },
        ],
        Completed: [
            {
                id: uuidv4(),
                column: ColumnType.COMPLETED,
                title: 'Wednesday Task 4',
                color: 'green.300',
            },
        ],
    },
    Thursday: {
        Todo: [
            {
                id: uuidv4(),
                column: ColumnType.TO_DO,
                title: 'Thursday Task 1',
                color: 'blue.300',
            },
        ],
        'In Progress': [
            {
                id: uuidv4(),
                column: ColumnType.IN_PROGRESS,
                title: 'Thursday Task 2',
                color: 'yellow.300',
            },
        ],
        Blocked: [
            {
                id: uuidv4(),
                column: ColumnType.BLOCKED,
                title: 'Thursday Task 3',
                color: 'red.300',
            },
        ],
        Completed: [
            {
                id: uuidv4(),
                column: ColumnType.COMPLETED,
                title: 'Thursday Task 4',
                color: 'green.300',
            },
        ],
    },
    Friday: {
        Todo: [
            {
                id: uuidv4(),
                column: ColumnType.TO_DO,
                title: 'Friday Task 1',
                color: 'blue.300',
            },
        ],
        'In Progress': [
            {
                id: uuidv4(),
                column: ColumnType.IN_PROGRESS,
                title: 'Friday Task 2',
                color: 'yellow.300',
            },
        ],
        Blocked: [
            {
                id: uuidv4(),
                column: ColumnType.BLOCKED,
                title: 'Friday Task 3',
                color: 'red.300',
            },
        ],
        Completed: [
            {
                id: uuidv4(),
                column: ColumnType.COMPLETED,
                title: 'Friday Task 4',
                color: 'green.300',
            },
        ],
    },
    Saturday: {
        Todo: [
            {
                id: uuidv4(),
                column: ColumnType.TO_DO,
                title: 'Saturday Task 1',
                color: 'blue.300',
            },
        ],
        'In Progress': [
            {
                id: uuidv4(),
                column: ColumnType.IN_PROGRESS,
                title: 'Saturday Task 2',
                color: 'yellow.300',
            },
        ],
        Blocked: [
            {
                id: uuidv4(),
                column: ColumnType.BLOCKED,
                title: 'Saturday Task 3',
                color: 'red.300',
            },
        ],
        Completed: [
            {
                id: uuidv4(),
                column: ColumnType.COMPLETED,
                title: 'Saturday Task 4',
                color: 'green.300',
            },
        ],
    },
    Sunday: {
        Todo: [
            {
                id: uuidv4(),
                column: ColumnType.TO_DO,
                title: 'Sunday Task 1',
                color: 'blue.300',
            },
        ],
        'In Progress': [
            {
                id: uuidv4(),
                column: ColumnType.IN_PROGRESS,
                title: 'Sunday Task 2',
                color: 'yellow.300',
            },
        ],
        Blocked: [
            {
                id: uuidv4(),
                column: ColumnType.BLOCKED,
                title: 'Sunday Task 3',
                color: 'red.300',
            },
        ],
        Completed: [
            {
                id: uuidv4(),
                column: ColumnType.COMPLETED,
                title: 'Sunday Task 4',
                color: 'green.300',
            },
        ],
    }
}

// Custom hook to manage tasks
function useTaskCollection() {
    const [tasks, setTasks] = useLocalStorage<{
        [key in DayType]: {
            [key in ColumnType]: TaskModel[];
        };
    }>('tasks', initialTasks);

    // Function to reset tasks to the initial state
    const resetTasks = () => {
        setTasks(initialTasks);
    };

    return { tasks, setTasks, resetTasks };
}

export default useTaskCollection;

// function useTaskCollection() {
//     return useLocalStorage<{
//         [key in DayType]: {
//             [key in ColumnType]: TaskModel[];
//         };
//     }>('tasks', {
//         Monday: {
//             Todo: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.TO_DO,
//                     title: 'Monday Task 1',
//                     color: 'blue.300',
//                 },
//             ],
//             'In Progress': [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.IN_PROGRESS,
//                     title: 'Monday Task 2',
//                     color: 'yellow.300',
//                 },
//             ],
//             Blocked: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.BLOCKED,
//                     title: 'Monday Task 3',
//                     color: 'red.300',
//                 },
//             ],
//             Completed: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.COMPLETED,
//                     title: 'Monday Task 4',
//                     color: 'green.300',
//                 },
//             ],
//         },
//         Tuesday: {
//             Todo: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.TO_DO,
//                     title: 'Tuesday Task 1',
//                     color: 'blue.300',
//                 },
//             ],
//             'In Progress': [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.IN_PROGRESS,
//                     title: 'Tuesday Task 2',
//                     color: 'yellow.300',
//                 },
//             ],
//             Blocked: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.BLOCKED,
//                     title: 'Tuesday Task 3',
//                     color: 'red.300',
//                 },
//             ],
//             Completed: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.COMPLETED,
//                     title: 'Tuesday Task 4',
//                     color: 'green.300',
//                 },
//             ],
//         },
//         // Repeat for other days of the week
//         Wednesday: {
//             Todo: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.TO_DO,
//                     title: 'Wednesday Task 1',
//                     color: 'blue.300',
//                 },
//             ],
//             'In Progress': [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.IN_PROGRESS,
//                     title: 'Wednesday Task 2',
//                     color: 'yellow.300',
//                 },
//             ],
//             Blocked: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.BLOCKED,
//                     title: 'Wednesday Task 3',
//                     color: 'red.300',
//                 },
//             ],
//             Completed: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.COMPLETED,
//                     title: 'Wednesday Task 4',
//                     color: 'green.300',
//                 },
//             ],
//         },
//         Thursday: {
//             Todo: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.TO_DO,
//                     title: 'Thursday Task 1',
//                     color: 'blue.300',
//                 },
//             ],
//             'In Progress': [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.IN_PROGRESS,
//                     title: 'Thursday Task 2',
//                     color: 'yellow.300',
//                 },
//             ],
//             Blocked: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.BLOCKED,
//                     title: 'Thursday Task 3',
//                     color: 'red.300',
//                 },
//             ],
//             Completed: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.COMPLETED,
//                     title: 'Thursday Task 4',
//                     color: 'green.300',
//                 },
//             ],
//         },
//         Friday: {
//             Todo: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.TO_DO,
//                     title: 'Friday Task 1',
//                     color: 'blue.300',
//                 },
//             ],
//             'In Progress': [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.IN_PROGRESS,
//                     title: 'Friday Task 2',
//                     color: 'yellow.300',
//                 },
//             ],
//             Blocked: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.BLOCKED,
//                     title: 'Friday Task 3',
//                     color: 'red.300',
//                 },
//             ],
//             Completed: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.COMPLETED,
//                     title: 'Friday Task 4',
//                     color: 'green.300',
//                 },
//             ],
//         },
//         Saturday: {
//             Todo: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.TO_DO,
//                     title: 'Saturday Task 1',
//                     color: 'blue.300',
//                 },
//             ],
//             'In Progress': [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.IN_PROGRESS,
//                     title: 'Saturday Task 2',
//                     color: 'yellow.300',
//                 },
//             ],
//             Blocked: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.BLOCKED,
//                     title: 'Saturday Task 3',
//                     color: 'red.300',
//                 },
//             ],
//             Completed: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.COMPLETED,
//                     title: 'Saturday Task 4',
//                     color: 'green.300',
//                 },
//             ],
//         },
//         Sunday: {
//             Todo: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.TO_DO,
//                     title: 'Sunday Task 1',
//                     color: 'blue.300',
//                 },
//             ],
//             'In Progress': [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.IN_PROGRESS,
//                     title: 'Sunday Task 2',
//                     color: 'yellow.300',
//                 },
//             ],
//             Blocked: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.BLOCKED,
//                     title: 'Sunday Task 3',
//                     color: 'red.300',
//                 },
//             ],
//             Completed: [
//                 {
//                     id: uuidv4(),
//                     column: ColumnType.COMPLETED,
//                     title: 'Sunday Task 4',
//                     color: 'green.300',
//                 },
//             ],
//         },
//     });
// }

// export default useTaskCollection;



// useLocalStorage: This is a custom hook (useLocalStorage) imported from the usehooks-ts library. It allows the application to store data locally in the browser.

// <...>: This syntax is TypeScript generics, which specifies the type of data expected.

// [key in ColumnType]: TaskModel[]: This TypeScript construct defines an object where each key is from the ColumnType enum, and the value is an array of TaskModel objects. It ensures that each key (like Todo, In Progress, etc.) corresponds to an array of tasks.

// 'tasks': This is the key used to store/retrieve data in local storage. It's a string identifier for the storage location.

// Initial Data Object ({ ... }): This object initializes the local storage with example tasks categorized by ColumnType.