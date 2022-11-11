import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";

const { Header, Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: 1,
    label: <Link to="/">Home</Link>,
  },
  {
    key: 2,
    label: "resume",
  },
  {
    key: 3,
    label: "portfolio",
  },
];

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
    <Layout className="layout">
      <b>현재시간: {time.toLocaleTimeString()}</b>
      <br />
      <Router>
        <nav>
          <Header className="header">
            <div className="logo" />
            <ul>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                items={items}
              />
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
          </Header>

          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </nav>
      </Router>
    </Layout>
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
