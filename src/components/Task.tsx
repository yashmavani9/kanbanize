import { DeleteIcon } from "@chakra-ui/icons";
import { Box, IconButton, } from "@chakra-ui/react";
//import _ from "lodash";
//import { memo } from "react";
import { useTaskDragAndDrop } from "../hooks/useTaskDragAndDrop";
import { TaskModel } from "../utils/models";
import { AutoResizeTextarea } from "./AutoResizeTextArea";

type TaskProps = {
    index: number;
    task: TaskModel;
    onUpdate: (id: TaskModel["id"], updatedTask: TaskModel) => void;
    onDelete: (id: TaskModel["id"]) => void;
    onDropHover: (i: number, j: number) => void;
};

function Task({
    index,
    task,
    onUpdate: handleUpdate,
    onDropHover: handleDropHover,
    onDelete: handleDelete,
}: TaskProps) {

    const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>(
        { task, index: index },
        handleDropHover
    );

    const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newTitle = e.target.value;
        handleUpdate(task.id, { ...task, title: newTitle });
    };

    const handleDeleteClick = () => {
        handleDelete(task.id);
    };

    return (
        //<ScaleFade in={true} unmountOnExit>
        <Box
            ref={ref}
            as="div"
            role="group"
            position="relative"
            rounded="lg"
            w={{sm:"auto"}}
            
            pl={2}
            pr={8}
            pt={2}
            pb={1}
            boxShadow="xl"
            cursor="grab"
            fontWeight="bold"
            userSelect="none"
            bgColor={task.color}
            opacity={isDragging ? 0.2 : 1}
        >
            <IconButton
                position="absolute"
                top={-0.5}
                right={-0.5}
                zIndex={100}
                aria-label="delete-task"
                size="md"
                colorScheme="solid"
                color={"gray.700"}
                icon={<DeleteIcon />}
                opacity={0}
                _groupHover={{
                    opacity: 1,
                }}
                onClick={handleDeleteClick}
            />
            <AutoResizeTextarea
                value={task.title}
                fontWeight="semibold"
                cursor="inherit"
                border="none"
                p={0}
                resize="none"
                minH={50}
                maxH={200}
                focusBorderColor="transparent"
                color="gray.700"
                onChange={handleTitleChange}
                css={{
                    //scrollbarWidth: 'thin',
                    //scrollbarGutter: "revert-layer",
                    //scrollbarColor: 'gray transparent',
                    '&::-webkit-scrollbar': {
                        width: '4px',   // Adjust the width of the scrollbar as needed for WebKit browsers
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'grey',   // Set the color of the scrollbar thumb
                    },

                }}
            />
        </Box>
    );
}

export default Task;

// export default memo(Task, (prev, next) => {
//   if (
//     _.isEqual(prev.task, next.task) &&
//     _.isEqual(prev.index, next.index) &&
//     prev.onDelete === next.onDelete &&
//     prev.onDropHover === next.onDropHover &&
//     prev.onUpdate === next.onUpdate
//   ) {
//     return true;
//   }

//   return false;
// });
