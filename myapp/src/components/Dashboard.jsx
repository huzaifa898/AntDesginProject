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
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  // User Profile Dropdown Menu
  const userMenu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<LogoutOutlined />} danger>
        Logout
      </Menu.Item>
    </Menu>
  );

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
        style={{ background: "#001529", transition: "all 0.3s ease-in-out" }}
      >
        <div
          className="logo"
          style={{
            color: "white",
            textAlign: "center",
            padding: "20px",
            fontSize: "18px",
            transition: "all 0.3s ease",
          }}
        >
          {collapsed ? "D" : "Dashboard"}
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<BarChartOutlined />}>
            Reports
          </Menu.Item>
          <Menu.Item key="3" icon={<FileTextOutlined />}>
            Documents
          </Menu.Item>
        </Menu>
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
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>

          {/* User Profile */}
          <Dropdown overlay={userMenu} trigger={["click"]}>
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

          {/* Dashboard Cards */}
          <div className="dashboard-cards">
            <Card className="dashboard-card users">
              <Statistic title="Total Users" value={1_256} />
            </Card>
            <Card className="dashboard-card projects">
              <Statistic title="Active Projects" value={43} />
            </Card>
            <Card className="dashboard-card revenue">
              <Statistic title="Revenue" value={"$25,640"} />
            </Card>
            <Card className="dashboard-card tasks">
              <Statistic title="Pending Tasks" value={12} />
            </Card>
          </div>

          {/* Data Table */}
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </Content>
      </Layout>

      {/* Custom Styles */}
      <style>
        {`
          .dashboard-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
          }

          .dashboard-card {
            transition: background-color 0.3s ease, transform 0.3s ease;
            cursor: pointer;
            border-radius: 8px;
          }

          /* Unique Hover Effects */
          .dashboard-card.users:hover {
            background-color: #4CAF50; /* Green */
            color: white;
            transform: scale(1.05);
          }

          .dashboard-card.projects:hover {
            background-color: #2196F3; /* Blue */
            color: white;
            transform: scale(1.05);
          }

          .dashboard-card.revenue:hover {
            background-color: #ffcc00; /* Yellow */
            color: black;
            transform: scale(1.05);
          }

          .dashboard-card.tasks:hover {
            background-color: #e91e63; /* Pink */
            color: white;
            transform: scale(1.05);
          }
        `}
      </style>
    </Layout>
  );
};

export default Dashboard;
