import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [ description, setDescription] = useState("");
    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type = "text" placeholder="title" onChange={function(e) {
            setTitle(e.target.value);
        }}/><br/>
        <input style={{
            padding:10,
            margin:10
        }} type = "text" placeholder="description" onChange={function(e) {
            setDescription(e.target.value);
        }}/> <br/>
        <button style={{
            padding:10,
            margin:10
        }} onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    completed: false
                }),
                headers: {
                     "Content-type": "application/json"
                }
            }).then(async function(res)  {
                const json = res.json();
                alert("Todo added");
            })
        }}>Add a Todo</button>
    </div>
}