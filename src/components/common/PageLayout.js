import { useRef, useState,useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Navigator from "./Navigator";
import { Spinner } from "./Spinner";

const Content = styled.main`
    max-width: 800px;    
    margin: 0;
    padding: 0 16px;
    box-sizing: border-box;   
`;

const Panel = styled.div`
    display: flex;
    flex-direction: row;    
`;

const PageLayout = ({children}) => {
    const [loading, setLoading] = useState(false);
    let _mount = useRef(false);
    useEffect(() => {
        setLoading(true);
        if (_mount) {
            _mount.current = false;
            setTimeout(() => {
                setLoading(false);
            }, 3000);            
        }     
    }, [])
    
    return (  
        <>
            <Header/>
            <Panel>
            <Navigator/>
                <Content>
                    {children}
                </Content>
                {loading &&<Spinner/>}
            </Panel>
            
        </>
    );
}
 
export default PageLayout;

