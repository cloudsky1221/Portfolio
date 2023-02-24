import { useState } from 'react';
import Widget from './widgets/Widgets';
import Taskbar from './taskbar/Taskbar';
import Glass from './glass/Glass';
import GitHub from './widgets/icons/github.png';
import PDF from './widgets/icons/pdf.png';
import Excel from './widgets/icons/excel.png';
import Weather from './Api/Weather/Weather';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {console.count("time")}
      <Widget name="Download Resume" img={PDF} url="" file=""/>
      <Widget name="Github Profile" img={GitHub} url="https://github.com/cloudsky1221"/>
      <Widget name="Online Excel" img={Excel} url="" />
      <Glass title="Projects" width={10} height={8} />
      <Weather />
      <Taskbar />
    </div>
  )
}

export default App
