import React from 'react'

function DeleteModal({setdeleteUser}) {
  return (
    <div>
        <div id="default-modal"  aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed inset-0 top-0 right-10  flex  left-0 justify-center   bg-black  bg-opacity-50 z-50  ">
            <div className="relative p-4 w-full  max-w-2xl max-h-full  top-36">
                    <div className="relative bg-gray-500 rounded-lg shadow ">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Delete User 
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={()=>setdeleteUser(false)}>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
       
                        <div className="p-4 md:p-5 space-y-4">
                            <p className="text-base leading-relaxed text-white ">
                                Do you want to delete this user ? 
                            </p>
               
                        </div>
      
                        <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="default-modal" type="button" className="text-white border-none bg-blue-700 hover:bg-blue-800 focus:ring-4   font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:border-none focus:outline-none">I accept</button>
                            <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-white   rounded-lg  hover:bg-gray-100 hover:text-blue-700   focus:border-none focus:outline-none  focus:ring-gray-100 bg-gray-800 " onClick={()=>setdeleteUser(false)}>Decline</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteModal