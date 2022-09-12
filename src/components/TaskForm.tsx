import { FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import { useTasks } from "../contexts/TaskContext";

const TaskForm = () => {
    const { addTask }: any = useTasks();
    const greenIcon = useRef<any>();
    const orangeIcon = useRef<any>();
    const redIcon = useRef<any>();
    const [priorityState, setPriorityState] = useState<
        "green" | "red" | "orange" | null
    >(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const task = document.querySelector<HTMLInputElement>("#task");
        const label = document.querySelector<HTMLInputElement>("#label");

        addTask({
            task: task?.value,
            label: label?.value,
            priority: priorityState,
        });

        if (task != null && label != null) {
            task.value = "";
            label.value = "";
            task.focus();
            redIcon.current.style.opacity = 0.3;
            greenIcon.current.style.opacity = 0.3;
            orangeIcon.current.style.opacity = 0.3;
        }

        setPriorityState(null);
    };

    const changePriority = (type: "green" | "red" | "orange") => {
        redIcon.current.style.opacity = 0.4;
        orangeIcon.current.style.opacity = 0.4;
        greenIcon.current.style.opacity = 0.4;
        if (type === "green" && priorityState !== "green") {
            greenIcon.current.style.opacity = 1;
            setPriorityState("green");
            return null;
        } else if (type === "red" && priorityState !== "red") {
            redIcon.current.style.opacity = 1;
            setPriorityState("red");
            return null;
        } else if (type === "orange" && priorityState !== "orange") {
            orangeIcon.current.style.opacity = 1;
            setPriorityState("orange");
            return null;
        }
        setPriorityState(null);
    };

    return (
        <Container>
            <StyledForm onSubmit={(e) => handleSubmit(e)}>
                <div className="inputHolder">
                    <input
                        type="text"
                        id="task"
                        className="TaskInput"
                        placeholder="New Task.."
                        required
                        onInput={(e: any) => e.target.setCustomValidity("")}
                        autoComplete="off"
                    />

                    <hr />

                    <input
                        type="text"
                        id="label"
                        className="TaskLabel"
                        placeholder="labels (use , to seprate)"
                    />
                    <div className="priority">
                        <i
                            className="fa fa-solid fa-circle"
                            style={{
                                color: "green",
                                fontSize: "10px",
                                opacity: "0.4",
                            }}
                            ref={greenIcon}
                            onClick={() => changePriority("green")}
                        ></i>
                        <i
                            className="fa fa-solid fa-circle"
                            style={{
                                color: "orange",
                                fontSize: "10px",
                                opacity: "0.4",
                            }}
                            ref={orangeIcon}
                            onClick={() => changePriority("orange")}
                        ></i>
                        <i
                            className="fa fa-solid fa-circle"
                            style={{
                                color: "red",
                                fontSize: "10px",
                                opacity: "0.4",
                            }}
                            ref={redIcon}
                            onClick={() => changePriority("red")}
                        ></i>
                    </div>
                </div>
                <AddButton type="submit">+</AddButton>
            </StyledForm>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    width: 100%;

    gap: 3px;
    .inputHolder {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 4px;

        border-radius: 5px;
        height: 61px;

        background-color: #d1d5db;
    }

    .priority {
        display: flex;
        flex-direction: row;
        gap: 4px;
    }

    .TaskInput {
        font-size: 20px;
        background-color: inherit;
        height: 30px;
        outline: none;
        border: none;
        font-size: 15px;
    }

    .TaskInput::placeholder {
        opacity: 0.7;
        font-size: 20px;
    }

    .TaskLabel {
        background-color: inherit;
        outline: none;
        border: none;
        font-size: 15px;
    }
    .TaskLabel::placeholder {
        opacity: 0.7;
        font-size: 13px;
    }
`;

const AddButton = styled.button`
    min-width: 40px;
    margin-right: 5px;
    height: 70px;
    padding: 4px;
    background-color: #1977f3;
    border: none;
    outline: none;
    font-size: 30px;
    font-weight: 100;
    color: white;
    border-radius: 5px;
    cursor: pointer;
`;
export default TaskForm;
