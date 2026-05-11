import React, { useState } from 'react';
import Notes from './Notes';

const Form = () => {
    // 1. Two-way binding state
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [allNotes, setAllNotes] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        setAllNotes([...allNotes, { title, desc }]);
        setTitle("");
        setDesc("");
    }
    const deleteHandler = (index) => {
    const copyNotes = [...allNotes]; // Create copy
    copyNotes.splice(index, 1);      // Modify copy
    setAllNotes(copyNotes);          // Update state
};

    return (
        <div className='min-h-screen lg:flex bg-zinc-900 text-white'>
            {/* Form Section */}
            <form onSubmit={submitHandler} className='lg:w-1/3 flex flex-col p-10 gap-6 border-r border-zinc-800'>
                <h1 className='text-3xl font-bold'>Add Notes</h1>
                
                {/* Fixed the image height/width classes */}
                <img 
                    className='h-32 w-32 self-center opacity-80' 
                    src="https://www.svgrepo.com/show/492986/bad-guy.svg" 
                    alt="logo"
                />

                <div className='flex gap-4 w-full flex-col'>
                    <input 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" 
                        placeholder="Enter Task heading" 
                        className='px-5 py-3 w-full bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                    />
                    <textarea 
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder='Enter Details' 
                        className='h-32 px-5 py-3 w-full bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500'
                    ></textarea>
                    <button className='bg-emerald-500 hover:bg-emerald-600 transition-colors text-white font-bold w-full px-5 py-3 rounded-lg'>
                        Add Note
                    </button>
                </div>
            </form>

            {/* Notes Display Section */}
            <div className='lg:w-2/3 p-10'>
                <h1 className='text-xl font-bold mb-8'>Your Notes</h1>
               <Notes data={allNotes} deleteNote={deleteHandler} />
            </div>
        </div>
    )
}

export default Form;