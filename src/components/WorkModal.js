import React from "react";

function WorkModal({ closeModal, data }) {
    if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
    }
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-hidden outline-none bg-zinc focus:outline-none">
            <div className="relative flex flex-col w-5/6 bg-white border-0 rounded-lg shadow-lg outline-none h-5/6 md:h-4/6 md:w-4/6 focus:outline-none">
                <div className='flex flex-col items-center h-screen px-10 justify center py-14'>
                    <div className='flex flex-col items-center py-10 title'> 
                    <h1 className='mb-4 text-3xl font-medium text-center text-black sm:text-4xl title-font'>{data.name}</h1> 
                    <span className="text-gray-400">{data.dates}</span>
                    </div>
                    <div className='overflow-y-auto text-black body h-2/5'> <p>{data.info}</p> </div>
                    <div className='pt-10 footer'> 
                    <button className='px-6 py-2 text-lg text-black border-0 rounded hover:bg-oat-pink-100 dark:bg-green-500 bg-oat-pink dark:text-white focus:outline-none dark:hover:bg-green-600' onClick={() => closeModal()}> Close </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkModal