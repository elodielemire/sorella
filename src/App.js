import './App.css';
import { createContext, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./Containers/Home/Home";
import CarePathway from "./Containers/CarePathway/CarePathway";
import Todo from "./Containers/Todo/Todo";
import Navbar from "./Components/Navbar/Navbar";
import Popup from "./Components/Popup/Popup"

const userDatas = {
  "name": "Elodie",
  "ovulationDate": "2024/01/25"
}

const pregnancyDuration = 280

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const appContext = createContext();

function App() {
  const [open, setOpen] = useState(true);
  const [ovulationDate, setOvulationDate] = useState(userDatas.ovulationDate);
  const updateOvulationDate = (data) =>{
    setOvulationDate(data)
  }

  const ovulationDateFormat = new Date(ovulationDate)
  const dpaDate = ovulationDateFormat.addDays(pregnancyDuration).toLocaleDateString("fr")
  const today = new Date()
  const durationInTime = today.getTime() - ovulationDateFormat.getTime()
  const durationInDays = Math.round(durationInTime / (1000 * 3600 * 24))
  const durationInWeeks = Math.round(durationInDays / 7)
  const durationInWeeksAndDays = durationInWeeks + "SA + " + (durationInDays % 7) + "J"
  const percentage = Math.round(100 * durationInDays / pregnancyDuration)

  const pregnancyDatas = {
    "dpaDate" : dpaDate,
    "durationInDays" : durationInDays,
    "durationInWeeks" : durationInWeeks,
    "durationInWeeksAndDays" : durationInWeeksAndDays,
    "percentage" : percentage
  }

  return (
     <appContext.Provider value={{ovulationDate,updateOvulationDate}}>
     {open ? <Popup text="Bienvenue !" closePopup={() => setOpen(false)} login={true} /> : null}
      <div className="App">
        <Navbar userDatas={userDatas}/>
        <Routes>
            <Route path='/' element={<Home userDatas={userDatas} pregnancyDatas={pregnancyDatas}/>}/>
            <Route path='/suivre-ma-grossesse' element={<CarePathway pregnancyDatas={pregnancyDatas}/>}/>
            <Route path='/a-faire/' element={<Todo/>}/>
        </Routes>
      </div>
      </appContext.Provider>
  );
}

export default App
export {appContext}
