import { Fragment, useContext } from 'react';
import Widget from './widgets/Widgets';
import Taskbar from './taskbar/Taskbar';
import Glass from './glass/Glass';
import GitHub from './widgets/icons/github.png';
import PDF from './widgets/icons/pdf.png';
import Excel from './widgets/icons/excel.png';
import Weather from './Api/Weather/Weather';
import { settingContext } from './Settings/Context';
import './App.css'


function App() {
  // const [count, setCount] = useState(100)
  const { count } = useContext(settingContext)

  return (
    <Fragment>

      <div className="App" style={{filter:`brightness(${count}%)`}}>
        {/* {console.count("time")} */}
        {/* <input type="range" value={count} min={10} onChange={(ev) => {setCount(ev.target.value)}}/> */}
        <Widget name="Download Resume" img={PDF} url="" file=""/>
        <Widget name="Github Profile" img={GitHub} url="https://github.com/cloudsky1221"/>
        <Widget name="Online Excel" img={Excel} url="" />
        <Glass title="Projects" width={10} height={8} />
        <Weather />
        <Taskbar />
      </div>
    </Fragment>
  )
}

export default App
