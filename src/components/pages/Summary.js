import PageLayout from "../common/PageLayout";
import styled from 'styled-components';

const Title = styled.h1`   
`;

const Content = styled.p`

`;

const Summary = () => {
    return ( 
        <PageLayout>
            <Title>Career Summary</Title>
            <Content>Jose is a team leader with 16 years of experience in the area of software development. 
                He led a team of 6-8 Front-End Software Developers providing support and guidance in technologies 
                like HTML5, CSS, React and JavaScript in migration projects through agile and waterfall methodologies.
            </Content>                
        </PageLayout>
     );
}
 
export default Summary;