import React from 'react'

function TrainingForm({trainingId,date,openModal,professors}) {
  return (
    <div>
        <form className='grid grid-cols-2 gap-6 px-2  py-2 '>
            <div >
                <label className="block mb-2 text-sm font-medium text-gray-900 "> Course Name</label>
                <input type="text"  value={trainingId?"Python":null} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Course Code </label>
                <input type="text"  value={trainingId?"Pro#005":null}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
            </div>
            <div className='col-span-2'>
                <label className="block mb-2 text-sm font-medium text-gray-900  ">Course Details</label>
                <textarea rows="5"  value={trainingId?"Python Essentials":null}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 w-full "    required />
            </div>
        
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Course Duration </label>
                <input type="text"  value={trainingId?"6 Months ":null}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"   required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Start Day </label>
                <input type="text"       
                value={date.toLocaleDateString()}  onClick={openModal} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                required />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Professor  </label>
                <select id="countries"  value={trainingId?2:1}className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5   ">
                        <option selected>Choose a Professor</option>
                        {professors.map(professor=>(
                            <option key="" value={professor.id}>{professor.name}</option>
                        ))}
                    
        
                </select>
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Max Students</label>
                <input type="text" value={trainingId?"200":null}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  
                required />
            </div>
            <div className="flex ">
                <button className='bg-red-800 text-white py-2  px-3  mr-5'>Submit</button>
                <button className='bg-red-800 text-white py-2  px-3 '>Cancel</button>
                
            </div>
      
           
        </form>
    </div>
  )
}

export default TrainingForm