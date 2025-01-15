import { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import styled from "@emotion/styled";

const TaskList = ({}) => {
    const [tasks, setTasks] = useState<string[]>([])
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    };

    const onClick = (task, index) => {
        const edited = prompt('Edit task', task);
        if (edited !== null && edited.trim() !== "") {
            const updatedTasks = [...tasks];
            updatedTasks[index] = edited;
            setTasks(updatedTasks);
        }
    };

    const onDragStart = (e, index) => {
        e.dataTransfer.setData("taskIndex", index);
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const onDrop = (e, targetIndex) => {
        const sourceIndex = e.dataTransfer.getData("taskIndex");
        if (sourceIndex !== targetIndex) {
            const updatedTasks = [...tasks];
            const [movedTask] = updatedTasks.splice(sourceIndex, 1);
            updatedTasks.splice(targetIndex, 0, movedTask);
            setTasks(updatedTasks);
        }
    };

    return (
        <DayWrapper>
            <Actions>
                <Input
                    placeholder='Add task'
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button onClick={addTask}>Add</Button>
            </Actions>
            <Tasks>
                {tasks.map((task, index) => (
                    <TaskItem
                        className='taskItem'
                        onClick={() => onClick(task, index)}
                        key={index}
                        draggable
                        onDragStart={(e) => onDragStart(e, index)}
                        onDragOver={onDragOver}
                        onDrop={(e) => onDrop(e, index)}
                    >
                        {`${index + 1}. ${task}`}
                        <CiEdit size={14} onClick={() => onClick(task, index)} />
                    </TaskItem>
                ))}
            </Tasks>
        </DayWrapper>
    );
};

export default TaskList;

const Input = styled.input`
  background: none;
  border: 1px solid;
  margin-bottom: 3px;
  border-radius: 4px;
  padding: 4px 6px;
  height: 20px;
  outline: none;
`

const Button = styled.button`
  width: 50px;
  background: transparent;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 4px 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
`

const Tasks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
  overflow-y: auto;
  height: 100px;
`;

const TaskItem = styled.li`
  background: lightgray;
  padding: 4px 6px;
  font-size: 10px;
  width: fit-content;
  margin-bottom: 2px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DayWrapper = styled.div`
  padding: 4px 6px;
  min-height: 100px;
  position: relative;
  overflow: hidden;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  position: sticky;
  bottom: 0; 
  padding: 5px 0;
`
