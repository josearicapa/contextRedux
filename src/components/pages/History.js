import styled from "styled-components";
import PageLayout from "../common/PageLayout";

const Title = styled.h1`   
`;

const SubTitle = styled.h2`
    margin: 0 auto;
`;

const SubTitle2 = styled.h2`
    font-size: 14px;
    margin: 0 auto;
`;

const OptionUl = styled.ul`     
    
`;

const OptionLi = styled.li`  
  
`;

const PanelOption = styled.div`
    display: flex;    
`;

function History(props) {
    return (
        <PageLayout>
            <Title>Carrer history</Title>
            <SubTitle>Globant Cali</SubTitle>
            <SubTitle2>Web UI Developer, Sr - May. 2021 to present</SubTitle2>
            <PanelOption>
                <OptionUl>
                    <OptionLi>Provide software development consulting services for the client Gannett/USA.</OptionLi>
                    <OptionLi>Be responsible for developing and implementing user interface components using technologies such as React.js, Jest, express.js for the SNAP (Single Navigation Account Platform) project.</OptionLi>                    
                </OptionUl>                            
            </PanelOption>
            <SubTitle>Open International, Cali, Colombia</SubTitle>
            <SubTitle2>Front-End Software Development Leader - Feb. 2015 – May. 2021</SubTitle2>
            <PanelOption>
                <OptionUl>
                    <OptionLi>Led a technology upgrade project migrating applications built in .NET to HTML5 applications using the Sencha Ext-JS Framework</OptionLi>
                    <OptionLi>Led the definition of the new architecture with React/Redux for the creation of HTML5 applications for the Open Smartflex product</OptionLi>
                    <OptionLi>Defined a test automation strategy for HTML5 applications, aligning the areas of Product Management, Backend and User experience in the test automation process</OptionLi>
                    <OptionLi>Led the implementation of a test automation framework for HTML5 applications, achieving the early detection of product defects and reducing testing times by 90% before each release</OptionLi>
                </OptionUl>
            </PanelOption>
            <SubTitle2>Senior Software Developer - Jan. 2009 – Feb. 2015</SubTitle2>
            <OptionUl>
                <OptionLi>Develop applications using PL/SQL-Oracle, Java and .NET languages programming </OptionLi>
                <OptionLi>Developed an application for displaying maps in C#, managing to integrate maps from Google Maps </OptionLi>
                <OptionLi>Optimus Gladius Recognition. He was one of the best software developers of 2014</OptionLi>
            </OptionUl>
            <SubTitle>Parquesoft/Abaco Group S.A., Cali, Colombia</SubTitle>
            <SubTitle2>Senior Software Developer - Mar. 2005 – Aug. 2008</SubTitle2>
            <OptionUl>
                <OptionLi>Led a group of 3 software developers</OptionLi>
                <OptionLi>Develop Web applications using JSP, Java, PL/pgSQL (Postgres) with Tomcat for Ecosfera SWM</OptionLi>
                <OptionLi>Developed an application in Java for displaying maps, managing to integrate maps from Google Maps</OptionLi>
            </OptionUl>
            
        </PageLayout>
    );
}

export default History;