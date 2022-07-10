import React, { useContext, useState, useRef, useCallback} from "react";

const AppContext = React.createContext()
const AppProvider = ({ children }) => {

    const [SelectedRadio, setSelectedRadio] = useState(null)
    const [page, setPage] = useState(1)

    return (<AppContext.Provider value = {{ SelectedRadio,setSelectedRadio, page,setPage} }>
            {children}
        </AppContext.Provider>);
}



const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext }