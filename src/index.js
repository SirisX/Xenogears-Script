import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// interface GeneralContextType {
//   isDarkMode: boolean;
//   setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>> | undefined;
// }

// export const GeneralContext = createContext<GeneralContextType>({
//   isDarkMode: true,
//   setIsDarkMode: undefined,
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GeneralContext.Provider value={{ isDarkMode: isdarkMode, setGlobalVolume }}> */}
    <App />
    {/* </GeneralContext.Provider> */}
  </React.StrictMode>
);