import React, {useContext} from 'react'
import FrenchFlag from '../../assets/france.svg'
import SpanishFlag from '../../assets/spain.svg'
import EnglishFlag from '../../assets/united-kingdom.svg'
import {Context} from '../../context/langContext'
import './ToggleLangs.css'

export default function Togglelangs() {

    const {toggleLang} = useContext(Context)
    console.log(toggleLang)

    return (
        <div className="container-langs">

            <img onClick= {() => toggleLang('FR')} src={FrenchFlag} alt="French Flag"/>
            <img onClick= {() => toggleLang('EN')} src={EnglishFlag} alt="English Flag"/>
            <img onClick= {() => toggleLang('ES')} src={SpanishFlag} alt="Spanish Flag"/>
            
        </div>
    )
}
