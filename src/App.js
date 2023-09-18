import './App.css';
import {Router, Route, Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./Routes/home";
import WriteRecordPage from "./Routes/addRecordByWords";
import WriteRecordPicPage from "./Routes/addRecordByPic";
import Login from './Routes/login';
import SignUp from './Routes/singup';
import Connect from './Routes/awsConsole';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/connect" element={<Connect />}/>
        {/* <Route path="/user" element={<I />}/>
        <Route path="/record" element={<WriteRecordPage />}/>
        <Route path="/record/pic" element={<WriteRecordPicPage />}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
