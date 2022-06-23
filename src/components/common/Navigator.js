import styled from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom";

const Link  = ({isActive,children,...props}) => {    
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    )
}

const StyledLink = styled(Link)`
    display:block;    
    margin: 0 auto;
    padding: 10px 8px;
    box-sizing: border-box;
    color: ${p => p.theme.bodyFontColor};
    font-weight: ${p => p.isActive ? 'bold' : 'normal'};
`;

const MainWrap = styled.div`
    display: block;
    flex-direction: column;
    align-content: flex-start;
    align-items: baseline;    
    width: 250px;
    height: 1000px;
    position: relative;
    background-image: linear-gradient(to right, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
    border-bottom: 3px solid ${p => p.theme.secondaryColor};
`;


const Navigator = () => {
    const {pathname} = useLocation();
    return (          
        <MainWrap>            
            <StyledLink to="/personalInfo" isActive={pathname === '/personalInfo'}>
            Personal Information
            </StyledLink>
            <StyledLink to="/" isActive={pathname === '/'}>
            Career Summary
            </StyledLink>
             <StyledLink to="/qualifications" isActive={pathname === '/qualifications'}>
             Summary of Qualifications
             </StyledLink>            
             <StyledLink to="/history" isActive={pathname === '/history'}>
             Carrer History
             </StyledLink>
             <StyledLink to="/education" isActive={pathname === '/education'}>
             Education
             </StyledLink>
        </MainWrap>       
        
    );
}
 
export default Navigator;
