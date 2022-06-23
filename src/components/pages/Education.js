import PageLayout from "../common/PageLayout";
import styled from 'styled-components';

const Title = styled.h1`
`;

const SubTitle = styled.h2`   
    margin: 0 auto;
`;

const SubTitle2 = styled.h2`   
    font-size: 14px;
    margin: 0 auto;
`;

const Card = styled.div`     
    margin: 30px 10px;
`;

const Summary = () => {
    return ( 
        <PageLayout>
            <Title>Education</Title>
            <Card>
                 <SubTitle>Universidad ICESI, Cali, Colombia</SubTitle>
                  <SubTitle2>PMI Project Management Course - PMBOK 6th Edition - Mar. 2018 – Jul. 2018</SubTitle2>
            </Card>
            <Card>
                  <SubTitle>Universidad ICESI, Cali, Colombia</SubTitle>                 
                  <SubTitle2>Master in Informatics and Telecommunications Management - Jul. 2013 – Aug. 2015</SubTitle2>
            </Card>
            <Card>
                 <SubTitle>Universidad del Valle, Cali, Colombia</SubTitle>                 
                 <SubTitle2>BS, Systems Engineering - Feb. 2004 – Nov. 2009</SubTitle2>
            </Card>
        </PageLayout>
     );
}
 
export default Summary;