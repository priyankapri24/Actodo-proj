import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { useState } from "react";

import Landing from "./pages/landing";

function App() {

  const [users, setusers] = useState(
    [
      {
        username: 'pri',
        password: '123'
      },
      {
        username:'abc',
        password:'123'
      }
    ])

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Login users={users} setusers={setusers} />}></Route>
        <Route path='/signup' element={<Signup users={users} setusers={setusers} />}></Route>
        <Route path='/landing' element={<Landing />}></Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
