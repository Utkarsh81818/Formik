import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";

const App = () => {
  const [view, setView] = React.useState(0);
  const [token, setToken] = React.useState(null);
  const onSetView = (data) => {
    setView(data);
  };
  return (
    <React.Fragment>
      <BrowserRouter>
        {view === 1 ? (
          <Dashboard onSetView={onSetView} token={token} />
        ) : (
          <Navbar />
        )}
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route
            path="/signin"
            element={
              <Signin onSetView={onSetView} setToken={setToken} token={token} />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile
                onSetView={onSetView}
                setToken={setToken}
                token={token}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
