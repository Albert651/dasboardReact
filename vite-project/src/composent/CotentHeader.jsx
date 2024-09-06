//import React from "react"
import { BiNotification, BiSearch } from "react-icons/bi"
const CotentHeader = () =>{
    return(
        <div className="content--header">
            <h1 className="header--title">Accueil</h1>
            <div className="header--activity">
                <div className="search-box">
                    <input type="text" placeholder="Rechercher n'importe quoi ici"/>
                    <BiSearch className="icon" />
                </div>
                <div className="notify">
                    <BiNotification className="icon"/>
                </div>
            </div>
        </div>
    )
}
export default CotentHeader