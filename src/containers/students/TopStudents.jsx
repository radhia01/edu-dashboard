import React from 'react'
  import user1 from "../../assets/usermen.png"
  import user2 from "../../assets/userwomen.png"
  import StudentCard from '../../components/Card/StudentCard'
function TopStudents() {
  const topStdents=[
    {
      id:1,
      
      FirstName:"Marwen ",
      LastName:"Attia",
      Email:"example01@gmail.com",
      course:"Introduction à la Programmation avec Python",
      top:1,
      score:2000,
      image:user1

    },
    {
      id:2,
      FirstName:"Ahlem ",
      LastName:"Suissi",
      Email:"example03@gmail.com",
      course:"Développement Web Frontend avec React",
      top:2,
      score:1990,
      JoiningDate:"12/10/2023",
      image:user2

    },
    {
      id:3,
      FirstName:"Mouna ",
      LastName:"Henchir",
      Email:"example04@gmail.com",
      course:"JavaScript : De Débutant à Expert",
      top:3,
      score:1500,
      JoiningDate:"04/04/2024",
      image:user2

    },
    {
      id:4,
      FirstName:"Ali ",
      LastName:"Ben Youssef",
      Email:"example01@gmail.com",
     course:"JavaScript : De Débutant à Expert",
      top:4,
      score:1450,
      JoiningDate:"01/02/2021",
      image:user1

    },
    {
      id:5,
      FirstName:"Aymen ",
      LastName:"Omrani",
      Email:"example1@gmail.com",
      course:"Développement Backend avec Node.js et Express",
      top:5,
      score:1400,
      JoiningDate:"12/06/2021",
      image:user1

    },
    {
      id:6,
      FirstName:"Rawdha ",
      LastName:"Hemdani",
      Email:"example01@gmail.com",
      course:"Développement Backend avec Node.js et Express",
      top:6,
      score:1350,
      JoiningDate:"12/10/2022",
      image:user2

    },
    {
      id:7,
      FirstName:"Arafat ",
      LastName:"Rahmouni",
      Email:"example02i@gmail.com",
      course:"Développement Web Frontend avec React",
      top:7,
      score:1300,
      JoiningDate:"17/05/2021",
      image:user1

    },
    {
      id:8,
      FirstName:"Nahed ",
      LastName:"Omrane",
      Email:"example02@gmail.com",
      course:"Développement Web Frontend avec React",
      top:8,
      score:1200,
      JoiningDate:"17/05/2021",
      image:user2

    },
  
  ]
  return (
    <div className="  min-h-screen  p-6  ">
      <div className='flex flex-col w-full rounded shadow bg-white  '>
        <div className=" flex py-3 px-4 relative "><h1 className='text-2xl text-red-800  font-bold '>Top Students </h1>
          
        </div>
        
      </div>
      <div className="  py-5 px-2   grid grid-cols-4  gap-8">
      {topStdents.map(student=>{
        return <StudentCard key={student.id}   user={student}/>


            
             })}
      </div>
    </div>
  )
}

export default TopStudents