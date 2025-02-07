import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

const Home = lazy(() => import("./pages/home/index"));
const Login = lazy(() => import("./pages/login"));
const Signup = lazy(() => import("./pages/signup"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
