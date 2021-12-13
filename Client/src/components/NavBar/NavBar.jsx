import {FaBars} from "react-icons/fa";
import CV from "../../img/cv.pdf";
import {useState} from "react"
import {
  IconLogoMobile,
  Menu,
  MenuItem,
  MenuItemLink,
  MenuItemLink2,
  NavbarContainer,
  NavbarWrapper,
} from "./Navbar.elements";

export default function NavBar() {
  const [click, setClick] = useState(false)

  const changeClick = () => {
    setClick(!click);
    console.log(click);
  }

  return (
    
      <NavbarContainer>
        <NavbarWrapper>
          <IconLogoMobile onClick={()=> changeClick()}>
            <FaBars/>
          </IconLogoMobile>
          <Menu click = {click}>
            <MenuItem onClick={()=> changeClick()}>
              <MenuItemLink to="/home">Sobre Mi</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={()=> changeClick()}>
              <MenuItemLink to="/proyects">Proyectos</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={()=> changeClick()}>
              <MenuItemLink to="/contact">Contacto</MenuItemLink>
            </MenuItem>
            <MenuItem onClick={()=> changeClick()}>
                <MenuItemLink2 href={CV} download="CV Facundo Maksud">
                  Descargar CV
                </MenuItemLink2>
              </MenuItem >
              <MenuItem onClick={()=> changeClick()}>
              <MenuItemLink to="/">Salir</MenuItemLink>
            </MenuItem>
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>
    
  );
}
