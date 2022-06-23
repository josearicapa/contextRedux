import {createGlobalStyle, ThemeProvider} from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Qualifications from "./components/pages/Qualifications";
import Education from "./components/pages/Education";
import Summary from "./components/pages/Summary";
import History from './components/pages/History';
import LightTheme from './themes/light'
import DarkTheme from './themes/dark'
import { useState } from 'react';
import { UserContext } from './context/UserContext';
import PersonalInfo from './components/pages/PersonalInfo';


const GlobalStyle = createGlobalStyle`
body {
  background: ${p => p.theme.bodyBackgroundColor};
  min-height: 100vh;
  margin: 0;
  color:${p => p.theme.bodyFontColor};  
  font-family: ${p => p.theme.fontFamily}
}
`;
function App() {
  
  const [theme, setTheme] = useState(LightTheme);
  const [user, setUser] = useState({
    id: 16378324,
    name: "Jose Luis Aricapa Martinez",
    nationality: "Colombian",
    dateBirth: "15/Nov/1984",
    maritalStatus: "Married",
    religion: "Catolic"
  });

  const [contactDetail, setContactDetail] = useState({    
    address: "CR 85E #42-50 - 904-D",
    phone: "3103610082",
    personalEmail: "jose.aricapa@gmail.com",
    workEmail: "jose.aricapa@globant.com",    
  });
  
  return (    
      <ThemeProvider theme={{...theme, setTheme: () => {
        setTheme(s => s.id === 'light' ? DarkTheme : LightTheme );
       }}}>
         <UserContext.Provider value={{
            user,
            setUser,
            contactDetail,
            setContactDetail
          }}>
         <BrowserRouter>
          <GlobalStyle />
           <Routes>
             <Route path= "/" element={<Summary/>} />
             <Route path="/personalInfo" element={<PersonalInfo />} />
             <Route path="/qualifications" element={<Qualifications />} />
             <Route path="/education" element={<Education />} />
             <Route path="/history" element={<History />} />
           </Routes>
        </BrowserRouter>  
        </UserContext.Provider>
       </ThemeProvider>
  );
}

export default App;
