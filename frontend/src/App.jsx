import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
  // return (
  //   <>
  //     <Header />
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Register />}></Route>
  //         <Route path="/register" element={<Register />}></Route>
  //         <Route path="/login" element={<Login />}></Route>
  //         <Route path="/home" element={<Home />}></Route>
  //         <Route path="/practice" element={<Practice />}></Route>
  //         <Route path="/roomoptions" element={<RoomOptions />}></Route>
  //         <Route path="/private/:roomID" element={<Private />}></Route>
  //         <Route path="/createroom" element={<CreateRoom />}></Route>
  //         <Route path="/joinroom" element={<JoinRoom />}></Route>
  //       </Routes>
  //     </Router>
  //   </>
  // );
}

export default App;
