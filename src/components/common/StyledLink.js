import { Link as ReactRouterDomLink } from "react-router-dom";
import styled from 'styled-components';


const Link  = ({isActive,children,...props}) => {    
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    )
}

const StyledLinkWrap = styled(Link)`
    padding: 4px 8px;
    display:block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${p => p.isActive ? 'bold' : 'normal'};
    color: ${p => p.theme.bodyFontColor};    
`;


const StyledLink = () => {
    return ( 
        <StyledLinkWrap/>
     );
}
 
export default StyledLink;