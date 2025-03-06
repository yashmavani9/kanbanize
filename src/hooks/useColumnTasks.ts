// 2 

import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ColumnType, DayType } from '../utils/enums';
import { pickChakraRandomColor, swap } from '../utils/helpers';
//import { debug } from '../utils/logging';
import { TaskModel } from '../utils/models';
import useTaskCollection from './useTaskCollection';

const MAX_TASK_PER_COLUMN = 100;

function useColumnTasks(column: ColumnType, day: DayType) {
    // const [tasks, setTasks] = useTaskCollection();
    const { tasks, setTasks, resetTasks } = useTaskCollection();

    //const columnTasks = tasks[column];

    const addEmptyTask = useCallback(() => {
        //debug(`Adding new empty task to ${column} column`);
        setTasks((allTasks) => {
            const columnTasks = allTasks[day][column];

            if (columnTasks.length > MAX_TASK_PER_COLUMN) {
                //debug('Too many task!');
                return allTasks;
            }

            const newColumnTask: TaskModel = {
                id: uuidv4(),
                title: `New ${day} ${column} task`,
                color: pickChakraRandomColor('.300'),
                column,
            };

            return {
                ...allTasks,
                [day]: {
                    ...allTasks[day],
                    [column]: [newColumnTask, ...columnTasks],
                },
                // Add the new task to the beginning of the column's task list
            };
        });
    }, [column, day, setTasks]);

    const deleteTask = useCallback(
        (id: TaskModel['id']) => {
            //debug(`Removing task ${id}..`);
            setTasks((allTasks) => {
                const columnTasks = allTasks[day][column];
                return {
                    ...allTasks,
                    [day]: {
                        ...allTasks[day],
                        [column]: columnTasks.filter((task) => task.id !== id),
                    },
                };
            });
        },
        [column, day, setTasks],
    );

    //updatedTask: An object containing updated properties of the task (Partial<TaskModel>), except for the id which is omitted (Omit<Partial<TaskModel>, 'id'>).
    const updateTask = useCallback(
        (id: TaskModel['id'], updatedTask: Omit<Partial<TaskModel>, 'id'>) => {
            //debug(`Updating task ${id} with ${JSON.stringify(updateTask)}`);
            setTasks((allTasks) => {
                const columnTasks = allTasks[day][column];
                return {
                    ...allTasks,
                    [day]: {
                        ...allTasks[day],
                        [column]: columnTasks.map((task) =>
                            task.id === id ? { ...task, ...updatedTask } : task,
                        ),
                    },
                };
            });
        },
        [column, day, setTasks],
    );

    const dropTaskFrom = useCallback(
        (from: ColumnType, id: TaskModel['id']) => {
            setTasks((allTasks) => {
                const fromColumnTasks = allTasks[day][from];
                const toColumnTasks = allTasks[day][column];
                //const movingTask = fromColumnTasks.find((task) => task.id === id);
                const movingTaskIndex = fromColumnTasks.findIndex((task) => task.id === id);

                //console.log(`Moving task ${movingTask?.id} from ${from} to ${column}`);

                if (movingTaskIndex === -1) {
                    return allTasks;
                }

                const movingTask = fromColumnTasks[movingTaskIndex];

                // remove the task from the original column and copy it within the destination column

                const updatedTasks = {
                    ...allTasks,
                    [day]: {
                        ...allTasks[day],
                        [from]: fromColumnTasks.filter((task) => task.id !== id),
                        [column]: [{ ...movingTask, column }, ...toColumnTasks],
                    },
                };

                return updatedTasks;

                // return {
                //     ...allTasks,
                //     [from]: fromColumnTasks.filter((task) => task.id !== id),
                //     [day]: {
                //         ...allTasks[day],
                //         [column]: [{ ...movingTask, column }, ...toColumnTasks],
                //     },
                // };
            });
        },
        [column, day, setTasks],
    );

    const swapTasks = useCallback(
        (i: number, j: number) => {
            //debug(`Swapping task ${i} with ${j} in ${column} column`);
            setTasks((allTasks) => {
                const columnTasks = allTasks[day][column];
                return {
                    ...allTasks,
                    [day]: {
                        ...allTasks[day],
                        [column]: swap(columnTasks, i, j),
                    },
                };
            });
        },
        [column, setTasks],
    );

    return {
        tasks: tasks[day][column],
        addEmptyTask,
        updateTask,
        dropTaskFrom,
        deleteTask,
        swapTasks,
    };
}

export default useColumnTasks;