import React from 'react'
import { useState } from 'react';


const FormDemo2=()=>{

    const [formData, setFormData]=useState({
        username:'',
        comments:'',
        topic:''
    });
    const handleSubmit=(event)=>{
        alert(`${formData.username}, ${formData.comments}`);
        event.preventDefault();
    }
   
    const handleChange=(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value});
    }
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text'
                        name="username"
                        value={formData.username}
                        onChange={handleChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <input type='textarea'
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select
                        value={formData.topic}
                        name="topic"
                        onChange={handleChange}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                            </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        );


}

export default FormDemo2;
