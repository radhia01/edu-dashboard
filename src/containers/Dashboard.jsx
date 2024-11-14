// Dashboard.js
import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import {BarChart,XAxis,Tooltip,YAxis,Legend,Bar,RadialBarChart,RadialBar} from "recharts"
import user1 from "../assets/usermen.png"
import user2 from "../assets/userwomen.png"
import Table from '../components/Table/Table';
import user3 from "../assets/user3.avif"
import CourseCard from '../components/Card/CourseCard';
import image1 from "../assets/course1.jpg"
import image2 from "../assets/course2.jpg"
import image3 from "../assets/course3.jpg"
import image4 from "../assets/course4.jpg"
const DataCard=({data})=>{
  
                              
 
    return (
      <div  key={data.id} className={`shadow py-4 px-3 rounded-sm justify-center  text-gray-800    ${data.color} grid grid-cols-3 mx-auto `}>
<div className="text-3xl  col-span-1 flex justify-center items-center">{data.icon}</div>
<div className=" col-span-2 flex flex-col ">
  <h1 className='text-xl'>{data.title}</h1>
  <h1 className='text-2xl font-bold '>{data.number}</h1>
  
  </div>
  
      </div>
    )

}

const Dashboard = () => {
  const usersList=[
    {
      id:1,
      FirstName:"Marwen ",
      LastName:"Attia",
      Gender:"Male",
      Email:"example01@gmail.com",
      Mobile:"012345678",
      JoiningDate:"01/02/2020",
      image:user1

    },
    {
      id:2,
      FirstName:"Ahlem ",
      LastName:"Suissi",
      Gender:"Female",
      Email:"example03@gmail.com",
      Mobile:"012345678",
      JoiningDate:"12/10/2023",
      image:user2

    },
    {
      id:3,
      FirstName:"Mouna ",
      LastName:"Henchir",
      Gender:"Female",
      Email:"example04@gmail.com",
      Mobile:"12345678",
      JoiningDate:"04/04/2024",
      image:user2

    },
    {
      id:4,
      FirstName:"Ali ",
      LastName:"Ben Youssef",
      Gender:"Male",
      Email:"example01@gmail.com",
      Mobile:"12345678",
      JoiningDate:"01/02/2021",
      image:user1

    },
    {
      id:5,
      FirstName:"Aymen ",
      LastName:"Omrani",
      Gender:"Male",
      Email:"example1@gmail.com",
      Mobile:"012345678",
      JoiningDate:"12/06/2021",
      image:user1

    },
    {
      id:6,
      FirstName:"Rawdha ",
      LastName:"Hemdani",
      Gender:"Female",
      Email:"example01@gmail.com",
      Mobile:"012345678",
      JoiningDate:"12/10/2022",
      image:user2

    },
    {
      id:7,
      FirstName:"Arafat ",
      LastName:"Rahmouni",
      Gender:"Male",
      Email:"example02i@gmail.com",
      Mobile:"012345678",
      JoiningDate:"17/05/2021",
      image:user1

    },
  ]
  
  const dashboardData=[{

    id:1,
    icon:<FaRegUser/>,
    title:"Total professors",
    number:150,
    color:"bg-red-500"
  },
  {

    id:2,
    icon:<FaRegUser/>,
    title:"Total Students",
    number:500,
    color:"bg-blue-200"
  },
  {

    id:3,
    icon:<GiGraduateCap/>,
    title:"Total Courses",
    number:100,
    color:"bg-gray-500"
  }]

  const data = [
    {
      "day": "2024",
      "students":500
    },
    {
      "day": "2023",
      "students": 450
    },
    {
      "day": "2022",
      "students":420
    },
    {
      "day": "2021",
      "students":380
    },
    {
      "day": "2020",
      "students": 350
    },
    {
      "day": "2019",
      "students": 320
    },
    {
      "day": "2018",
      "students": 290
    },
    {
      "day": "2017",
      "students": 250
    },
    {
      "day": "2016",
      "students": 200
    }
  ]
  
 
  const data01 = [
    {
      "name": "Javascript",
      "total": 150,
      "pv": 150,
      "fill": "#8884d8"
    },
    {
      "name": "HTML",
      "total": 200,
      "pv": 200,
      "fill": "#83a6ed"
    },
    {
      "name": "CSS",
      "total": 130,
      "pv": 130,
      "fill": "#8dd1e1"
    },
    {
      "name": "Angular",
      "total": 400,
      "pv": 400,
      "fill": "#82ca9d"
    },
    {
      "name": "React",
      "total": 450,
      "pv": 450,
      "fill": "#a4de6c"
    },
   
  ]
  const coursesList=[
    {id:1,
      name:"Introduction à la Programmation avec Python",
      duration:"6 Months",
      professor:"Amna ben Ali",
      students:+100,
      image:image4
    },
    {id:2,
      name:"Développement Web Frontend avec React",
      duration:"12 Months",
      professor:"Riad Hamrouni",
      students:+120,
      image:image2
    },
    {id:3,
      name:"JavaScript : De Débutant à Expert",
      duration:"12 Months",
      professor:"Sihem Soltani",
      students:+60,
      image:image3
    },
    {id:4,
      name:"Développement Backend avec Node.js et Express",
      duration:"7 Months",
      professor:"Houssem Ben Romdhane",
      students:+200,
      image:image1
    }
  
  ]
  
  
  return (
    <div className="  w-full   min-h-screen    ">
      <h1 className='text-red-800 font-semibold'>Dashboard</h1>
                <div className=" grid grid-cols-3  gap-4  mt-4">
                  
                {dashboardData.map(element=>{
                  return <DataCard  key={element.id} data={element} />
                 })}</div> 


<div className="mt-4 py-4 grid grid-cols-4 gap-4 ">
  <div className=" shadow rounded-sm   bg-white  col-span-2 flex  flex-col ">
    <h1 className='text-gray-800   font-medium py-3 px-2'>Students progress with years </h1><BarChart width={500} height={250} data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}} >
  <XAxis dataKey="day" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="students" fill="red" />
</BarChart></div>
<div className="col-span-2  bg-white text-gray-700 flex flex-col shadow ">
 <h1 className='text-gray-800   font-medium py-3 px-2'>Total students by  courses</h1>
<RadialBarChart 
  width={500} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={data01} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='total' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right"  color='black'/>
  <Tooltip />
</RadialBarChart></div>
  </div>

  <div className=" bg-white flex flex-col">
    <h1 className='text-gray-900 py-4 px-2  font-medium'>Students added recently</h1>
 <Table usersList={usersList} item={""}/>
  </div>

<div className="shadow  mt-4   ">
<h1 className='font-bold  py-4  px-2 text-gray-800 bg-white shadow '>Popular Courses</h1>
<div className="grid grid-cols-4 mt-4 gap-3 ">
{coursesList.map(course=>{
    return (
        <CourseCard key={course.id} data={course} />
    )
  })}
</div>

</div>
      </div>
  
    
  );
};

export default Dashboard;