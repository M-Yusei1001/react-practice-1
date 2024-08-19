import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const userInfo = {
  name:"SmartFalcon",
  type:"Dirt"
};

const UserInfoContext = createContext(userInfo);

createRoot(document.getElementById('root')!).render(
  <UserInfoContext.Provider value = { userInfo }>
    <StrictMode>
        <App />
    </StrictMode>
  </UserInfoContext.Provider>
);

export default UserInfoContext; 
