import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './List.css'

const List = () => {
  const [List, setList] = useState([{ 
    id: 1,
    experienceImportantes : "Html/CSS"
  }, {
    id: 2,
    experienceImportantes : "Javascript"
  }, {
    id: 3,
    experienceImportantes : "React"
  }])
  
  return (
    <div className='list'>
      <Navbar />
      <h1 className='titre'>Liste de mes apprentissages :</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Expérience importante</th>
          </tr>
        </thead>
        <tbody>
          {List.map((experience, index) => (
            <tr key={index}>
              <td>{experience.id}</td>
              <td>{experience.experienceImportantes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
