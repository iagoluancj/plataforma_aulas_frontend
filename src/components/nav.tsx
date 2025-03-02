import React from 'react';
import { NavActions, NavBar, NavTitle, SearchContainer, SearchInput } from '../styles/navStyles';
import { IconButton, IconButtonGear, Title } from '../styles/stylesGlobal';
import { TbSearch, TbBell } from 'react-icons/tb';
import { IoClose } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";

interface NavProps {
  title: string;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Nav = ({ title, toggleSidebar, isOpen }: NavProps) => {
  const FaGearIcon = FaGear as React.ElementType;
  const TbFlagSearchIcon = TbSearch as React.ElementType;
  const TbBellIcon = TbBell as React.ElementType;
  const IoCloseIcon = IoClose as React.ElementType;

  return (
    <NavBar>
      <NavTitle>{title}</NavTitle>
      <NavActions>
        <SearchContainer> 
          <SearchInput type="text" placeholder="Buscar aulas..." /> 
          {/* Aqui será um link com a pagina 'aulas disponiveis, onde ao pesquisar, levará o usuario até a pagina e mostrará de acordo com sua pesquisa' */}
          <TbFlagSearchIcon />
        </SearchContainer>
        <IconButton>
          <TbBellIcon />
        </IconButton>
        <IconButtonGear onClick={toggleSidebar}>
          {isOpen ? <IoCloseIcon /> : <FaGearIcon />}
        </IconButtonGear>
      </NavActions>
    </NavBar>
  );
};
export default Nav;
