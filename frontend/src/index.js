import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Layout from "./Common_Components/Layout";
import reportWebVitals from "./reportWebVitals";
import Leaderboard from "./Leaderboard_Components/leaderboard";
import MainLogic from "./Main_Components/MainLogic";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./Login_Components/LoginForm";
import Loading from "./Common_Components/Loading";
import RegisterForm from "./Register_Components/RegisterForm";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Layout.Main>
                <MainLogic />
              </Layout.Main>
              <Layout.Right></Layout.Right>
            </Layout>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <Layout>
              <Layout.Main>
                <Leaderboard />
              </Layout.Main>
            </Layout>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Layout>
              <Layout.Main>
                <Suspense fallback={<Loading />}>
                  <LoginForm />
                </Suspense>
              </Layout.Main>
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Layout.Main>
                <RegisterForm />
              </Layout.Main>
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
