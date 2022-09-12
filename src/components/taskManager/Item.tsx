import styled from "styled-components";
import { useTasks } from "../../contexts/TaskContext";
interface ItemsProps {
    task: string;
    label: string;
    is_completed: boolean;
    id: string;
    priority: "green" | "red" | "orange" | null;
}

export const Item = ({
    task,
    label,
    is_completed,
    id,
    priority,
}: ItemsProps) => {
    const { updateTask, deleteTask }: any = useTasks();
    const labels = label.split(",");

    return (
        <Container>
            {is_completed ? (
                <ListItem className="completed">
                    <div className="labelInfo">
                        <div>
                            <input
                                type="checkbox"
                                defaultChecked={is_completed}
                                onChange={() => updateTask({ id })}
                            />
                            {labels[0] !== "" ? (
                                <p>{task}</p>
                            ) : (
                                <p
                                    style={{
                                        color: `${priority}`,
                                    }}
                                >
                                    {task}
                                </p>
                            )}
                        </div>
                        <div>
                            {labels[0] !== "" &&
                                labels.map((label_item: string) => {
                                    return (
                                        <span
                                            className="tag tag-color tag-sm"
                                            style={{
                                                backgroundColor: `${priority}`,
                                            }}
                                        >
                                            {label_item}
                                        </span>
                                    );
                                })}
                        </div>
                    </div>

                    <div>
                        <i
                            className="fa fa-trash-o"
                            aria-hidden="true"
                            onClick={() => {
                                deleteTask({ id });
                            }}
                        />
                    </div>
                </ListItem>
            ) : (
                <ListItem>
                    <div className="labelInfo">
                        <div>
                            <input
                                type="checkbox"
                                defaultChecked={is_completed}
                                onChange={() => updateTask({ id })}
                            />
                            {labels[0] !== "" ? (
                                <p>{task}</p>
                            ) : (
                                <p
                                    style={{
                                        color: `${priority}`,
                                    }}
                                >
                                    {task}
                                </p>
                            )}
                        </div>
                        <div>
                            {labels[0] !== "" &&
                                labels.map((label_item: string) => {
                                    return (
                                        <span
                                            className="tag tag-color tag-sm"
                                            style={{
                                                backgroundColor: `${priority}`,
                                            }}
                                        >
                                            {label_item}
                                        </span>
                                    );
                                })}
                        </div>
                    </div>

                    <div>
                        <i
                            className="fa fa-trash-o"
                            aria-hidden="true"
                            onClick={() => {
                                deleteTask({ id });
                            }}
                        />
                    </div>
                </ListItem>
            )}
            <hr className="divider" />
        </Container>
    );
};

const Container = styled.div`
    .completed {
        opacity: 0.5;
        margin-top: 5px;
        list-style: none;
    }
`;

const ListItem = styled.li`
    margin-left: 5px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    input[type="checkbox"] {
        cursor: pointer;
    }

    .labelInfo {
        display: flex;
        flex-direction: column;
    }

    div {
        display: flex;
        flex-direction: row;
    }

    p {
        margin-left: 5px;
        font-weight: 500;
        font-size: 15px;
    }

    .tag {
        display: inline-block;
        border-radius: 5px;
        font-weight: 600;
        padding: 5px;
        margin-left: 5px;
        width: auto;
    }

    .tag-sm {
        font-size: 0.8em;
        display: inline-block;
        letter-spacing: 0.15ch;
        font-weight: 400;
    }

    .tag-color {
        background: #2775c3;
        color: white;
    }
    i {
        visibility: hidden;
    }
    &:hover {
        i {
            justify-content: center;
            cursor: pointer;
            visibility: visible;
        }
    }
`;
