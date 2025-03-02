import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ActiveIcon, Header, IconList, IconWrapper, Overlay, ProfileIcon, SideBar, SpanIcon } from '../styles/stylesGlobal';
import { MdDashboard, } from 'react-icons/md';
import { GrUserManager } from "react-icons/gr";
import { CiBoxList } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

interface SideBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SideBarProps) => {
  const MdDashboardIcon = MdDashboard as React.ElementType;
  const GrUserManagerIcon = GrUserManager as React.ElementType;
  const CiBoxListIcon = CiBoxList as React.ElementType;
  const TbListDetailsIcon = TbListDetails as React.ElementType;
  const CgProfileIcon = CgProfile as React.ElementType;

  const location = useLocation();

  const getActiveIcon = () => {
    switch (location.pathname) {
      case "/dashboard":
        return <MdDashboardIcon />;
      case "/manage-classes":
        return <GrUserManagerIcon />;
      case "/available-classes":
        return <CiBoxListIcon />;
      case "/class-details":
        return <TbListDetailsIcon />;
      case "/profile":
        return <CgProfileIcon />;
      default:
        return <MdDashboardIcon />;
    }
  };

  return (
    <>
      <Overlay isOpen={isOpen} onClick={toggleSidebar} />
      <SideBar className={isOpen ? "open" : ""}>
        <aside>
          <Header>
            <img src="https://educat.com.br/wp-content/uploads/2024/09/logo-educat-1024x241.png" alt="Logo empresa" />
          </Header>

          <ActiveIcon>
            {getActiveIcon()}
          </ActiveIcon>

          <IconList>
            {
              location.pathname !== "/dashboard" && (
                <IconWrapper>
                  <Link to="/dashboard">
                    <span>Dashboard</span>
                    <MdDashboardIcon />
                  </Link>
                </IconWrapper>
              )
            }

            {location.pathname !== "/manage-classes" && (
              <IconWrapper>
                <Link to="/manage-classes">
                  <span>Gerenciar aulas</span>
                  <GrUserManagerIcon />
                </Link>
              </IconWrapper>
            )}

            {location.pathname !== "/available-classes" && (
              <IconWrapper>
                <Link to="/available-classes">
                  <span>Aulas disponiveis</span>
                  <CiBoxListIcon />
                </Link>
              </IconWrapper>
            )}
          </IconList>


          <ProfileIcon>
            <Link to="/profile">
              <CgProfileIcon />
            </Link>
          </ProfileIcon>

        </aside>
      </SideBar>
    </>
  );
};

export default Sidebar;


