import React, { useEffect, useState } from 'react';
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
  const [userRole, setUserRole] = useState<string | null>(null);

  const storedUser = sessionStorage.getItem("userData");
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;

  // Renderiza o icone na div "Ativo" de acordo com o path name atual
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


  // Para ficar coeso com os acessos, os icones aparecem de acordo com a role.
  useEffect(() => {
    const storedRole = sessionStorage.getItem("userData");
    if (storedRole) {
      const parsedData = JSON.parse(storedRole);
      setUserRole(parsedData.role);
    }
  }, []);

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
            {userRole === "admin" && (
              <>
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
              </>
            )}

            {userRole === "student" && (
              <>
                {location.pathname !== "/available-classes" && (
                  <IconWrapper>
                    <Link to="/available-classes">
                      <span>Aulas disponíveis</span>
                      <CiBoxListIcon />
                    </Link>
                  </IconWrapper>
                )}
              </>
            )}
          </IconList>


          <ProfileIcon>
            <Link to="/profile">
              {parsedUser && parsedUser.profile_picture ? (
                <img src={`http://127.0.0.1:8000${parsedUser.profile_picture}`} alt="Profile" />
              ) : (
                <CgProfileIcon />
              )}

            </Link>
          </ProfileIcon>

        </aside>
      </SideBar>
    </>
  );
};

export default Sidebar;


