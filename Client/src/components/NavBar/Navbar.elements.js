import { Link } from 'react-router-dom';
import styled from 'styled-components'


export const NavbarContainer = styled.div`
    width: 100%;
    height:80px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: #FF7F60;
    border-bottom: 2px solid black

`;

export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 800px;
    height: 100%;
    display:flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;  
`;

export const Menu = styled.ul`
    height: 100%;
    display:flex;
    justify-content:center;
    align-items: center;

    @media(max-width: 768px){
        width: 100%;
        height: 90vh;
        position:absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : "-100%")};
        flex-direction: column;
        transition : 0.5s all ease-in;
        background-color: #6290E1
    }
`;

export const MenuItem = styled.li`
    height: 100%;
    padding: 0.5rem 1.5rem;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:1.2rem;
    font-weight:400;

    &:hover{
        background-color: #AB5800;
        border-bottom: 0.3rem solid #FF8E8E;
        transition: 0.4s ease-in;
        cursor: pointer;
    }

    @media(max-width: 768px){
        width: 100%;
        height: 70px;
    }
`

export const MenuItemLink = styled(Link)`
text-decoration: none;
color: white;
`;

export const MenuItemLink2 = styled.a`
text-decoration: none;
color: white;
`;

export const IconLogoMobile = styled.div`
    display:none;
    @media(max-width: 768px){
        display:flex;
        color: white important!;
        font-size: 2rem;
        color: white;
        margin-left: 10px;
    }
`;