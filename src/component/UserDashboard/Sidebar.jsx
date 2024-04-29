import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { IconContext } from "react-icons/lib";

const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const Sidebar = ( {setOption} ) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const { isAuthenticated,  isLoading ,logout} = useAuth0();
  if(isLoading) return 'Loading . . .'
  if(isAuthenticated) return (
    <>
      <IconContext.Provider
        value={{ color: `${({ sidebar }) => (sidebar ? "white" : "black")}` }}
      >
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            <SidebarLink  onClick={()=> {setOption(0)}}>
              <div>
                <SidebarLabel>Profile</SidebarLabel>
              </div>
            </SidebarLink>
            <SidebarLink
              onClick={ ()=> {setOption(1)}}
            >
              <div>
                <SidebarLabel>Blood Request</SidebarLabel>
              </div>
            </SidebarLink>
            <SidebarLink
             onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              <div>
                <SidebarLabel>Logout</SidebarLabel>
              </div>
            </SidebarLink>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
