import './App.css';
import {createContext, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./Containers/Home/Home";
import CarePathway from "./Containers/CarePathway/CarePathway";
import Todo from "./Containers/Todo/Todo";
import ToRead from "./Containers/ToRead/ToRead";
import Article from "./Containers/Article/Article";
import Navbar from "./Components/Navbar/Navbar";
import Popup from "./Components/Popup/Popup"

const pregnancyDuration = 280
const appContext = createContext();

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

function App() {
  const [open, setOpen] = useState(true);
  const [userDatas, setUserDatas] = useState({'ovulationDate': new Date(), 'name': ''});
  const updateOvulationDate = (data) => {
    setUserDatas((prevState) => ({...prevState, 'ovulationDate': data}))
  }

  const updateUserName = (data) => {
    setUserDatas((prevState) => ({...prevState, 'name': data}))
  }

  const ovulationDateFormat = new Date(userDatas.ovulationDate)
  const dpaDate = ovulationDateFormat.addDays(pregnancyDuration).toLocaleDateString("fr")
  const today = new Date()
  const durationInTime = today.getTime() - ovulationDateFormat.getTime()
  const durationInDays = Math.round(durationInTime / (1000 * 3600 * 24))
  const durationInWeeks = Math.floor(durationInDays / 7) + 2
  const durationInWeeksAndDays = durationInWeeks + "SA + " + (durationInDays % 7) + "J"
  const percentage = Math.round(100 * durationInDays / pregnancyDuration)

  const pregnancyDatas = {
    "dpaDate": dpaDate,
    "durationInDays": durationInDays,
    "durationInWeeks": durationInWeeks,
    "durationInWeeksAndDays": durationInWeeksAndDays,
    "percentage": percentage
  }

  return (
    <appContext.Provider value={{userDatas, updateUserName, updateOvulationDate}}>
      {open ? <Popup text="Bienvenue !" closePopup={() => setOpen(false)} login={true}/> : null}
      <div className="App">
        <Navbar userDatas={userDatas}/>
        <Routes>
          <Route path='/' element={<Home userDatas={userDatas} pregnancyDatas={pregnancyDatas}/>}/>
          <Route path='/suivre-ma-grossesse' element={<CarePathway pregnancyDatas={pregnancyDatas}/>}/>
          <Route path='/a-faire/' element={<Todo/>}/>
          <Route path='/lectures/' element={<ToRead/>}/>
          <Route path='/lectures/:slug' element={<Article/>}/>
        </Routes>
      </div>
    </appContext.Provider>
  );
}

export default App
export {appContext}
