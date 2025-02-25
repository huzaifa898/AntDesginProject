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
        style={{ background: "#001529" }}
      >
        <div className="logo" style={{ color: "white", textAlign: "center", padding: "20px", fontSize: "18px" }}>
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
        <Header style={{ background: "#fff", padding: "0 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
        <Content style={{ margin: "20px", padding: 20, background: "#fff", borderRadius: "8px" }}>
          <h2 style={{ marginBottom: "20px" }}>Dashboard Overview</h2>

          {/* Dashboard Cards */}
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
            <Card style={{ width: "25%" }}>
              <Statistic title="Total Users" value={1_256} />
            </Card>
            <Card style={{ width: "25%" }}>
              <Statistic title="Active Projects" value={43} />
            </Card>
            <Card style={{ width: "25%" }}>
              <Statistic title="Revenue" value={"$25,640"} />
            </Card>
            <Card style={{ width: "25%" }}>
              <Statistic title="Pending Tasks" value={12} />
            </Card>
          </div>

          {/* Data Table */}
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
