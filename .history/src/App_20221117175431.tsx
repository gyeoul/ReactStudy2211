import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
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
    label: <Link to="/resume">이력서</Link>,
  },
  {
    key: 3,
    label: <Link to="/portfolio">포트폴리오</Link>,
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
      <Router>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={items}
            />
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
                items={items}
              />
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <b>< 현재시간: {time.toLocaleTimeString()} ></b>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <br />
                <Routes>
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
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
