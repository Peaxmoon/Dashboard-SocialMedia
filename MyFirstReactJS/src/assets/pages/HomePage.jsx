import React from 'react'

function HomePage() {
    const lists = [
        {
            id: 1,
            name: "sujjal",
            age: 21
        },
        {
            id: 2,
            name: "Pratik",
            age: 20
        },
        {
            id: 3,
            name: "sushant",
            age: 22
        },
        {
            id: 4,
            name: "sujal",
            age: 19
        }
    ]
  return (
    <div>
        <div>HomePage</div>
        <div>
            <input type="text" />
        </div>
        <div>
            {
                lists.map((list) => (
                    <Card key={list.id} data={list}/>
                ))
            }
        </div>
    </div>
  )
}

const Card = ({data}) => {
    return (
        <div style={{backgroundColor: "purple"}}>
        <h2>{data.name}</h2>
        <p>{data.age}</p>
        <p>{data.index}</p>
        </div>
    )
}

export default HomePage