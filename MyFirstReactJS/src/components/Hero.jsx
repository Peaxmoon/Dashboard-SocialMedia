import React from 'react'
import style from './heroSec.module.css'
export function Hero() {
  let count = 5;
  return (
    <>
    <h1 className={style.heroSecHeading}>Parent Component</h1>
    <ChildComp count={count} greet={"hello"} name={"Sujjal"} />
    <ChildComp count={count} greet={"second child"} name={"Khadka"} />
    <div className={style.lekhero}>hero</div>
    <div className={style.sujjal}>sujjal</div>
    <div class="font-bold bg-red-200">Pratik</div>
    <input type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl" value="Submit now!!" />
    </>
  )
}


export const ChildComp = ({count, greet, name, ...rest}) => {

  return (
    <div>
      <p style={{backgroundColor:"lightblue", border:"1px solid"}}>Child Componet</p>
      <p className="childCard">Child Componet</p>
      <p>{count}</p>
      <h1>Greetings to, {greet}, <div className={style.namecolor}>{name}</div>, Your count is {count}</h1>
      <SubChildComp count={count+1} />
    </div>
  )
}

const SubChildComp = ({count}) => {
  return (
    <div>
      <h2>SubChildComp how to use</h2>
      {count+1}
    </div>
  )
}