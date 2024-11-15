import React from 'react'

function StudentForm({userId,coursesList,openModal,date,birthDate,setisBirthDate,setisDate}) {
    const handleJoiningDate=()=>{
        setisDate(true), setisBirthDate(false), openModal()

    }
    const handleBirthDate=()=>{
        openModal();
        setisBirthDate(true),
        setisDate(false)
    }
  return (
    <div>
        <div>
        <form className='grid grid-cols-2 gap-6 px-2  py-2 '>
          <div >
            <label className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
            <input type="text"  value={userId?"Emma":null} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
            <input type="text"  value={userId?"Parker":null}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
            <input type="email"  value={userId?"exmple@gmail.com":null}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Mobile</label>
            <input type="text"  value={userId?"02020202":null}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Gender</label>
            <select id="countries"  value={userId?"female":null}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5   ">
                        <option selected>Choose a Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
        
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Address</label>
            <input type="text" value={userId?"Tunis":null}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
            <input type="password"  value={userId?"0101010":null}   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Joining Date</label>
            <input type="text"       
                value={date.toLocaleDateString()}  onClick={handleJoiningDate} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">BirthDate</label>
            <input type="text"       
                value={birthDate.toLocaleDateString()}  onClick={handleBirthDate} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  placeholder="John" required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Courses</label>
            <select id="courses" multiple className="bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5   ">
              {coursesList.map(course=>(
                  <option key={course.id} value={course.id}>{course.name}</option>
                        ))}
            </select>
          </div>
          <div className="flex ">
            <button className='bg-red-800 text-white py-2  px-3  mr-5'>Submit</button>
            <button className='bg-red-800 text-white py-2  px-3 '>Cancel</button>
                
          </div>
        </form>
  </div>
    </div>
  )
}

export default StudentForm