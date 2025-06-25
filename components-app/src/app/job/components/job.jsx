'use client'

import { useState } from "react";

export default function Job(){

    const [job, setJob] = useState([
        {id: 1, title: 'Job 1', body: 'This is first job'},
        {id: 2, title: 'Job 2', body: 'This is Second job'}
    ]);
    //To handle submitt button either add or update
    const [isEditing, setIsEditing] = useState(false)

    //To handle form : to add new job into list
    const [form, setForm] = useState({ title: '', body: '', id: null })


    //Listener: TO save or update job
    const handleSubmit = (e) => {
        e.preventDefault();
        isEditing ? updateJob() : addJob()
    }

    const updateJob = () => {
         //array update
         setJob(job.map(job => (job.id === form.id ? form : job)))
         //Reset/clear the form
         setForm({ title: '', body: '', id: null })
         //reset add 
         setIsEditing(false)
    }

    const addJob = () => {
        //new Job object
        const newJob = { id: Date.now(), title: form.title, body: form.body }
        //add Job into Jobs array
        setJob([...job, newJob])
        //Reset/clear the form
        setForm({ title: '', body: '', id: null })
    }

    //Edit Job
    const handleEdit = (job) => {
        console.log(job)
        //load into form fields
        setForm({ title: job.title, body: job.body, id: job.id })
        //reset Flag from add to edit
        setIsEditing(true)
    }
    //Delete Job
    const handleDelete = id => {
        setJob(job.filter(job => job.id !== id))
    }

    return <div>
        {/* To add new job or edit exiting */}
        {/* Todo: Remove this after complete */}
        {/* JSON.stringfy(form) */}

        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" required onChange={e=> setForm({...form, title: e.target.value})} value={form.title} placeholder="Title"></input>
            </div>
            <div>
                <textarea placeholder="Body" required onChange={e=> setForm({...form, body: e.target.value})} value={form.body}/>
            </div>
            <div>
                <button type="submit">{isEditing ? 'Update' : 'Add'} Job </button>
            </div>
        </form>

         {/* List existing Jobs */}
         <ul>
            {job.map(job => {
                return <li key={job.id}>
                    <h2>{job.title}</h2>
                    <p>{job.body}</p>
                    <button onClick={(e) => {
                        handleEdit(job)
                    }}> Edit </button> &nbsp;
                    <button onClick={(e) => {
                        handleDelete(job.id)
                    }}> Delete </button>
                </li>
            })}
        </ul>

    </div>
}