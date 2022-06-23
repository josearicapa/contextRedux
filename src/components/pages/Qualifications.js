import styled from "styled-components";
import PageLayout from "../common/PageLayout";

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

const Qualifications = () => {
    return (
        <PageLayout>
            <Title>Summary of Qualifications</Title>
            <SubTitle>Skills</SubTitle>
            <PanelOption>
                <OptionUl>
                    <OptionLi>HTML5</OptionLi>
                    <OptionLi>CSS/SaaS</OptionLi>
                    <OptionLi>JavaScript</OptionLi>
                </OptionUl>

                <OptionUl>
                    <OptionLi>Jest</OptionLi>
                    <OptionLi>React</OptionLi>
                    <OptionLi>express</OptionLi>
                </OptionUl>

                <OptionUl>
                    <OptionLi>Cucumber</OptionLi>
                    <OptionLi>NightwatchJS</OptionLi>
                    <OptionLi>TDD/BDD</OptionLi>
                </OptionUl>

                <OptionUl>
                    <OptionLi>Java</OptionLi>
                    <OptionLi>Git</OptionLi>
                    <OptionLi>PL/SQL</OptionLi>
                </OptionUl>
            </PanelOption>
            <SubTitle>Languages</SubTitle>
            <PanelOption>
                <OptionUl>
                    <OptionLi>Spanish (native speaker)</OptionLi>
                    <OptionLi>English (upper intermediate)</OptionLi>                    
                </OptionUl>                
            </PanelOption>
        </PageLayout>
    );
}

export default Qualifications;