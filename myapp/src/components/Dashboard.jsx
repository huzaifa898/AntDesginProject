import React, { useState } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Card,
  Statistic,
  Table,
  Avatar,
  Dropdown,
  Button,
} from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  BarChartOutlined,
  FileTextOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  // User Profile Dropdown Menu
  const userMenu = {
    items: [
      {
        key: "1",
        icon: <UserOutlined />,
        label: "Profile",
      },
      {
        key: "2",
        icon: <SettingOutlined />,
        label: "Settings",
      },
      {
        type: "divider",
      },
      {
        key: "3",
        icon: <LogoutOutlined />,
        label: "Logout",
        danger: true,
      },
    ],
  };

  // Sidebar Menu Items
  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "2",
      icon: <BarChartOutlined />,
      label: "Reports",
    },
    {
      key: "3",
      icon: <FileTextOutlined />,
      label: "Documents",
    },
  ];

  // Breadcrumb Items
  const breadcrumbItems = [
    { title: "Home" },
    { title: "Dashboard" },
  ];

  // Table Data
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  const data = [
    { key: "1", id: "001", name: "John Doe", role: "Admin", status: "Active" },
    { key: "2", id: "002", name: "Jane Smith", role: "Manager", status: "Inactive" },
    { key: "3", id: "003", name: "Sam Johnson", role: "User", status: "Active" },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: "#001529" }}
        breakpoint="md"
        collapsedWidth="0"
      >
        <div
          className="logo"
          style={{
            color: "white",
            textAlign: "center",
            padding: "20px",
            fontSize: "18px",
          }}
        >
          {collapsed ? "D" : "Dashboard"}
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={menuItems} />
      </Sider>

      {/* Main Content */}
      <Layout>
        {/* Header */}
        <Header
          style={{
            background: "#fff",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              style={{ marginRight: 10 }}
            />
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* User Profile */}
          <Dropdown menu={userMenu} trigger={["click"]}>
            <Button type="text" style={{ border: "none", background: "none" }}>
              <Avatar icon={<UserOutlined />} style={{ marginRight: 8 }} />
              Admin
            </Button>
          </Dropdown>
        </Header>

        {/* Dashboard Content */}
        <Content
          style={{
            margin: "20px",
            padding: 20,
            background: "#fff",
            borderRadius: "8px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Dashboard Overview</h2>

          {/* Responsive Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <Card>
              <Statistic title="Total Users" value={1_256} />
            </Card>
            <Card>
              <Statistic title="Active Projects" value={43} />
            </Card>
            <Card>
              <Statistic title="Revenue" value={"$25,640"} />
            </Card>
            <Card>
              <Statistic title="Pending Tasks" value={12} />
            </Card>
          </div>

          {/* Responsive Table */}
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 5 }}
            scroll={{ x: "max-content" }}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
