import './App.css';
import {Router, Route, Routes, BrowserRouter} from "react-router-dom";
import HomePage from "./Routes/home";
import WriteRecordPage from "./Routes/addRecord";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/record" element={<WriteRecordPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
