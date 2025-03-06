import React from 'react';
import { NavActions, NavBar, NavTitle, SearchContainer, SearchInput } from '../styles/navStyles';
import { IconButton, IconButtonGear, Title } from '../styles/stylesGlobal';
import { TbSearch } from 'react-icons/tb';
import { FiLogOut } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import useAuth from '../hooks/useAuth';
import { NavProps } from '../services/types';


const Nav = ({ title, toggleSidebar, isOpen }: NavProps) => {
  const FaGearIcon = FaGear as React.ElementType;
  const TbFlagSearchIcon = TbSearch as React.ElementType;
  const FiLogOutIcon = FiLogOut as React.ElementType;
  const IoCloseIcon = IoClose as React.ElementType;

  const { logout } = useAuth()

  return (
    <NavBar>
      <NavTitle>{title}</NavTitle>
      <NavActions>
        <SearchContainer>
          <SearchInput type="text" placeholder="Buscar aulas..." />
          {/* Aqui será um link com a pagina 'aulas disponiveis, onde ao pesquisar, levará o usuario até a pagina e mostrará de acordo com sua pesquisa' */}
          <TbFlagSearchIcon />
        </SearchContainer>
        <IconButton onClick={(() => logout())}>
          <FiLogOutIcon />
        </IconButton>
        <IconButtonGear onClick={toggleSidebar}>
          {isOpen ? <IoCloseIcon /> : <FaGearIcon />}
        </IconButtonGear>
      </NavActions>
    </NavBar>
  );
};
export default Nav;
