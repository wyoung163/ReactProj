import './App.css';
import {Router, Route, Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./Routes/home";
import WriteRecordPage from "./Routes/addRecordByWords";
import WriteRecordPicPage from "./Routes/addRecordByPic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/record" element={<WriteRecordPage />}/>
        <Route path="/record/pic" element={<WriteRecordPicPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
