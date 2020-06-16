import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navigation = () => {
  return (
    <>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px", backgroundColor: "#fff", display:"flex", justifyContent:"space-between" }}
      >
        <Menu.Item key="1" style={{ color: "#fff" }}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/services">Services</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/gallery">Gallery</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navigation;
