import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
// import { StyledDiv } from "../styles/style";

const ServicesNav = () => {
  return (
    <>
      <Menu
        theme="light"
        mode="vertical"
        defaultSelectedKeys={["1"]}
        style={{
          lineHeight: "64px",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Menu.Item key="1" style={{ color: "#fff" }}>
          <Link to="/services/walks">Walks</Link>
        </Menu.Item>
        <Menu.Item key="2" style={{ color: "#fff" }}>
          <Link to="/services/boarding">Boarding</Link>
        </Menu.Item>
        <Menu.Item key="2" style={{ color: "#fff" }}>
          <Link to="/services/ Daycare"> Day Care</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default ServicesNav;
