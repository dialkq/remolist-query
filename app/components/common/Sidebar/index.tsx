
'use client'

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

// Lihat dan baca react pro sidebar
export default function SidebarComponent() {
  return (
    <>
      <Sidebar width="200px" className="min-h-screen">
        <Menu>
          <SubMenu label="News">
            <MenuItem>Politik</MenuItem>
            <MenuItem>Kesehatan</MenuItem>
          </SubMenu>
          
          <SubMenu label="Lowongan">
            <MenuItem>IT</MenuItem>
            <MenuItem>Sales</MenuItem>
          </SubMenu>

          <MenuItem>Report</MenuItem>
          <MenuItem>Bisnis</MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
