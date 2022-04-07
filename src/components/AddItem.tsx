import React, { useState } from "react";
import { Item } from "./ToDoList";

const AddItem = (addItem: Item) => {
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState(-1);
    const [item, setItem] = useState({ task, priority });

    return (
        <table>
        <tbody>
            <tr key={""}>
            <td>Task:</td>
            <td>
                <input
                id="task"
                type="text"
                placeholder="Enter task here"
                onChange={setTask}
                />
            </td>
            <td>Priority:</td>
            <td>
                <input
                id="prioity"
                type="text"
                placeholder="Enter priority here"
                onChange={setPriority}
                />
            </td>
            <td>
                <input id="submit" type="submit" onClick={addItem} />
            </td>
            </tr>
        </tbody>
        </table>
    );
}

export default AddItem;
