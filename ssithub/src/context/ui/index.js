// import { createContext, useContext, useState } from "react";


// export const UIContext=createContext();
// export const useUIContext=useContext(UIContext);

// export const UIProvider=({children})=>{
//     const [drawerOpen,setDrawerOpen]=useState(false);
//     const value={
//         drawerOpen,
//         setDrawerOpen
//     }
//     return <UIContext.Provider value={value}>{children}</UIContext.Provider>
// }
import { createContext, useContext, useState } from "react";

export const UIContext = createContext();

export const useUIContext = () => useContext(UIContext); // Custom hook

export const UIProvider = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const value = {
        drawerOpen,
        setDrawerOpen
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
