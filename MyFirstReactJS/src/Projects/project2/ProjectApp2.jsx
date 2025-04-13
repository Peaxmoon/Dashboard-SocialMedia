import React, { useState } from 'react'

function ProjectApp2() {
  const [length, setLength] = useState(8);  return (
    <div>
      <h1>Password Generator</h1>
      <h1>Length : {length}</h1>
    </div>
  )
}
// 4;24x
export default ProjectApp2