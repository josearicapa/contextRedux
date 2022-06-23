import styled from 'styled-components';

const ToggleWraper = styled.div`    
    display: flex;
    height: 25px;
    width: 50px;
    min-width: 50px;
    border-radius: 25px;
    border: 1px solid #666;
    margin: auto;
    background-image: linear-gradient(to bottom, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
`;

const Notch = styled.div`
    height: 21px;
    width: 21px;
    border: 1px solid #666;
    background: white;    
    border-radius: 50%;
    transition: transform 0.1s linear;    
    transform: translate(${p => p.isActive ? '26px' : '1px'});
    margin-top: 1px;
`;

const Toggle = ({isActive, onToggle}) => {
    return ( 
        <ToggleWraper onClick={onToggle}>
            <Notch isActive={isActive}/>
        </ToggleWraper>
     );
}
 
export default Toggle;