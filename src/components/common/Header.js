import { useState, useContext } from "react";
import styled, {ThemeContext} from "styled-components";
import { UserContext } from "../../context/UserContext";
import Toggle from "./Toggle";

const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: relative;
    top: 0;
    background-image: linear-gradient(to right, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
    border-bottom: 3px solid ${p => p.theme.secondaryColor};
`;

const Menu = styled.nav`
    display: ${p => p.open ? 'block': 'none'};    
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 8px;
    box-sizing: border-box;
    border-bottom: 3px solid ${p => p.theme.secondaryColor};
    background: ${p => p.theme.bodyBackgroundColor};
                
    @media (min-width: 768px) {
        display: flex;
        background: none;
        left: initial;
        top: initial;
        width: initial;
        border-bottom: none;
        margin: auto 0 auto auto;
        position:relative;
    }
`;

const Title = styled.h1`
    position: relative;
    left: 230px;
    bottom: 15px;
    margin: 25px auto;
    @media(max-width: 768px){
        display: none;
    }
`;


const MobileMenuIcon = styled.div`    
    margin: auto 0 auto auto;
    width: 25px;
    min-width: 25px;
    padding: 5px;

    >div{
        height: 3px;
        background: ${p => p.theme.bodyFontColor};
        margin: 5px 0;
        width: 100%
    }

    @media(min-width: 768px){
        display: none;
    }
`;

const Header = () => {    
    const [menuOpen, setMenuOpen] = useState(false);
    const {id, setTheme} = useContext(ThemeContext);
    const userContext = useContext(UserContext);
    const {user} = userContext;

    const onToggle = () => { 
        setTheme();
     };

    return ( 
        <HeaderWrapper>
            <Title>{user.name}</Title>
            <MobileMenuIcon onClick={() => setMenuOpen(s => !s)}>
                <div/>
                <div/>
                <div/>
            </MobileMenuIcon>
            <Menu open={menuOpen}>            
                <Toggle isActive={id === 'dark'} onToggle={onToggle}/>
            </Menu>
        </HeaderWrapper>
     );
}
 
export default Header;
