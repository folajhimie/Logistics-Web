import "./App.css";

// import Navbar from "./pages/navbar/Navbar";
// import Navbar from "./components/Navbar/index";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Layout from "./components/Layout";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<Home/>}
          />
          {/* <Route path="tasks" element={<DashboardTasks />} /> */}
        </Route>
    </Routes>
    </div >
  );
}

export default App;
