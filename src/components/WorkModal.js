import { XIcon } from '@heroicons/react/solid';
import React from "react";

function WorkModal({ closeModal, data }) {
    return (
        <div className="flex bg-zinc justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col h-5/6 w-5/6 md:h-4/6 md:w-4/6 bg-white outline-none focus:outline-none">
                <div className='flex flex-col h-screen justify center items-center px-10 py-14'>
                    <div className='title flex flex-col py-10 items-center'> 
                    <h1 className='sm:text-4xl text-3xl font-medium title-font text-black mb-4'>{data.name}</h1> 
                    <span>{data.dates}</span>
                    </div>
                    <div className='body overflow-y-auto'> <p>{data.info}</p> </div>
                    <div className='footer py-20'> 
                    <button className='text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg' onClick={() => closeModal()}> Close </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkModal