import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const todos = [ 
    {   id : uuidv4(),
        title : "Call Bristy 1",
        desc : "She is a good girl",
    },
    {   
        id : uuidv4(),
        title : "Call Miskat 2",
        desc : "He is a chuna  programmer!",
    },
    {   
        id : uuidv4(),
        title : "Call Mosharaf 3",
        desc : "Plugin boy",
    },
    { 
        id : uuidv4(),
        title : "Call Mosharaf 4",
        desc : "Plugin boy",
    },
    { 
        id : uuidv4(),
        title : "Call Mosharaf 5",
        desc : "Plugin boy",
    }
]
const UList = () => {
    console.log(todos);
  return (
    <div className='headingStyle'> 
        {todos.map((todo) => { 
            const {id,title,desc} = todo
            return ( 
                <div key={id}> 
                    <h1>{title}</h1>
                    <h1>{desc}</h1>
               </div>
            )
        })}
    </div>
  )
}

export default UList