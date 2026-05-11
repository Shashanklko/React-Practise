import React from 'react';

const Notes = ({ data, deleteNote }) => {
    if (data.length === 0) {
        return <p className="text-zinc-500 italic">No notes added yet.</p>;
    }

    return (
        <div className='flex flex-wrap gap-5'>
            {data.map((note, index) => (
                <div key={index} className='relative min-h-52 w-52 p-4 rounded-2xl bg-zinc-100 text-black flex flex-col gap-2'>
                    {/* Delete Button */}
                    <button 
                        onClick={() => deleteNote(index)}
                        className='absolute top-2 right-2 bg-red-500 text-white h-6 w-6 rounded-full flex items-center justify-center text-xs hover:bg-red-700'
                    >
                        ✕
                    </button>

                    <h2 className='text-lg font-bold border-b pb-1 break-words pr-5'>
                        {note.title}
                    </h2>
                    <p className='text-sm text-zinc-700 break-words'>
                        {note.desc}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Notes;