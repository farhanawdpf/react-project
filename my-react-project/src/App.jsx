import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Card from './components/Card'
import Data from './data.json'

function App() {
  // let items = [];
  // items = Data.map((item) =><Card tityleText={item.title} descTitle={item.desc} />)
  // for (let x=0; x<Data.length; x++) { 
  //   items.push(<Card tityleText={Data[x].title} descTitle={Data[x].desc} />)
  // }

  return <div> 
      {Data.map((item, index) =><Card tityleText={item.title} key={index}descTitle={item.desc} />)}
  </div>
}

export default App
