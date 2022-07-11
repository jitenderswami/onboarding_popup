import React, { useContext, useEffect, useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [SelectedRadio, setSelectedRadio] = useState(null)
    const [page, setPage] = useState(1)
    const[buttonDisabled, setbuttonDisabled] = useState(true)

    const[userName,setUserName] = useState("")
    const[companyName,setCompanyName] = useState("")
    const[hireForName,setHireForName] = useState("")
    const[consultancyName,setconsultancyName] = useState("")

    const finalobject ={
        username: {userName},
        companyname: {companyName},
        hireforname:{hireForName},
        consultancyname:{consultancyName}
    }


    useEffect(()=>{

            {userName && page === 1 ? setbuttonDisabled(false) : setbuttonDisabled(true) }

    },[userName, page])


    useEffect(() => {
        if(page===2 && SelectedRadio === "My Own Company"){
            {companyName ? setbuttonDisabled(false) : setbuttonDisabled(true)}

        }
    },[SelectedRadio,companyName,page])



    useEffect(()=>{

        if(page===2 && SelectedRadio === "My clients"){

            {hireForName && consultancyName ? setbuttonDisabled(false) : setbuttonDisabled(true)}


        }

    },[SelectedRadio,companyName,hireForName,consultancyName,page])


    

    

    return (<AppContext.Provider value = {{ finalobject,
                                            buttonDisabled, setbuttonDisabled,
                                            SelectedRadio,setSelectedRadio, 
                                            page,setPage,
                                            userName,setUserName,
                                            companyName,setCompanyName,
                                            hireForName,setHireForName,
                                            consultancyName,setconsultancyName}}>
            {children}
        </AppContext.Provider>);
}



const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext }