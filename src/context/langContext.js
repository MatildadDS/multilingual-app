import React, {createContext, useState} from 'react'


export const Context = createContext();

const supportedLangs = ['EN', 'FR', 'ES'];

let browserLang = navigator.language.slice(0,2).toUpperCase();
console.log(browserLang);

if (supportedLangs.indexOf(browserLang) === -1) {
    console.log("not supported");
    browserLang= "EN";
}


const ContextProvider = props => {

    const [lang, setLang] = useState(browserLang)
    console.log(lang)

    const toggleLang = changeLang => {
        setLang(changeLang)
    }

    return (
        <Context.Provider value={{lang, toggleLang}}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;