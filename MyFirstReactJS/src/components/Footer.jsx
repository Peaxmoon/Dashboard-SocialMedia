import React from 'react'
import style from './heroSec.module.css'
// <heroSecHeading className="module"></heroSecHeading>
function Footer() {
  const students = [
    {
      id: 1,
      name: "sujjal",
      address: "Tinkune"
    },
    {
      id: 2,
      name: "Pratik",
      address: "Jadibuti"
    },
    {
      id: 3,
      name: "sushant",
      address: "Thamel"
    },
    {
      id: 4,
      name: "sujal",
      address: "Itahari"
    }
  ]
  const isAdmin = true;
  const canEdit = false;
  return (
    <div>

      <h1>Card Creation</h1>
      <div>
        {
          students.map((student, index) => (
            <Card key={student.id} data={student} />
          ))
        }
      </div>

      <h1>footer</h1>
      <p>Use of ternary operatir</p>

      <p className={style.heroSecHeding}>
        {isAdmin ? "!!!Welcome, Admin..." : "Welcome User"}
        <div>
          {isAdmin ? (canEdit ? "edit" : "view") : "you are not admin"}
        </div>
      </p>
      <span className={style.herSubHeading}>This is our super react app!!!</span>
    </div>
  )
}

const Card = ({data}) => {
  return (
      <div style={{backgroundColor: "purple"}}>
      <h2>{data.name}</h2>
      <p>{data.age}</p>
      </div>
  )
}

export default Footer