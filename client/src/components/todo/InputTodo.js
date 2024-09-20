import React, {useState} from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = {description};
            // console.log(body);
            
            await fetch("http://localhost:5001/dashboard/todos",
               { 
                    method: "POST",
                    headers: {"Content-Type": "application/json",token: localStorage.token},
                    body: JSON.stringify(body)
                }
            );
            // console.log(response);
            

            window.location = ("/")
            
        } catch (error) {
            console.error(error.message)
        }
    }
    return <>
    <h1 className="text-center mt-5">P.E.R.N. Todo List</h1>
    <form className="d-flex mt-5" onSubmit= {onSubmitForm}>
        <input 
            type="text" 
            className="form-control" 
            value = {description} 
            onChange = {e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
    </form>
    </>
};

export default InputTodo;