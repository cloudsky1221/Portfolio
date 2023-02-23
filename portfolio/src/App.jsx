import { useState } from 'react';
import Widget from './widgets/Widgets';
import Taskbar from './taskbar/Taskbar';
import Glass from './glass/Glass';
import GitHub from './icons/github.png';
import PDF from './icons/pdf.png';
import Excel from './icons/excel.png';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Widget name="Resume" img={PDF}/>
      <Widget name="Github Profile" img={GitHub}/>
      <Widget name="Online Excel" img={Excel}/>
      <Glass title="Projects" width={10} height={8} />
      <Taskbar />
    </div>
  )
}

export default App
