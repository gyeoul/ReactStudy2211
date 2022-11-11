import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [time, setTime] = useState(new Date());
  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <b>현재시간: {time.toLocaleTimeString()}</b>
      <br />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resume">이력서</Link>
            </li>
            <li>
              <Link to="/portfolio">포트폴리오</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </nav>
      </Router>
    </>
  );
}

const Resume = () => {
  return (
    <div>
      <h1>자기소개</h1>
      <h2>이름</h2>
      <p>
        박창현[<code>gyeoul</code>]
      </p>
      <h2>학력</h2>
      <ul>
        <li>광영고등학교</li>
        <li>동양미래대학교</li>
      </ul>
      <h2>경력</h2>
      <ul>
        <li>mCloudoc(netid)</li>
      </ul>
    </div>
  );
};
const Portfolio = () => {
  return <>portfolio</>;
};
const Home = () => {
  return <>home</>;
};

export default App;
