import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../context/UserContext';
import PageLayout from '../common/PageLayout';

const Title = styled.h1`   
`;

const SubTitle = styled.h2`   
`;

const OptionUl = styled.ul`     
    
`;

const OptionLi = styled.li`  
  
`;

const PanelOption = styled.div`
    display: flex;    
`;

const PersonalInfo = () => {
    const userContext = useContext(UserContext);
    const {user,setUser} = userContext;
    const {contactDetail} = userContext;

    const handleClick = () => { 
        const newUser = {...user};
        newUser.name = "Atoms Team";
        setUser(newUser);
     }
                
    return (
        <PageLayout>
            <Title>{''}</Title>
            <SubTitle>General</SubTitle>
            <PanelOption>
                <OptionUl>
                    <OptionLi>{user.name}</OptionLi>
                    <OptionLi>{user.nationality}</OptionLi>
                    <OptionLi>{user.dateBirth}</OptionLi>
                    <OptionLi>{user.maritalStatus}</OptionLi>
                    <OptionLi>{user.religion}</OptionLi>
                </OptionUl>                            
            </PanelOption>
            <SubTitle>Contact Details</SubTitle>
            <PanelOption>
                <OptionUl>
                    <OptionLi>{contactDetail.address}</OptionLi>
                    <OptionLi>{contactDetail.phone}</OptionLi>
                    <OptionLi>{contactDetail.personalEmail}</OptionLi>
                    <OptionLi>{contactDetail.workEmail}</OptionLi>                    
                </OptionUl>                            
            </PanelOption> 
            <button onClick={handleClick}>Actualizar nombre</button>           
        </PageLayout>
        
    );
}

export default PersonalInfo;
