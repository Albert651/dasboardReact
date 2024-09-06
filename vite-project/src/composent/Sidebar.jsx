import React, { useState } from "react";
import { BiHelpCircle, BiHome, BiMessage, BiSolidReport, BiStats, BiTask, BiMenu } from "react-icons/bi";
import '../styles/Sidebar.css';
import Image from '../image/dev3.jpg';

const logos = [
    {
        imge: Image,
        name: 'Logo'
    }
];

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // État pour gérer l'affichage de la barre latérale

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Inverser l'état pour afficher ou masquer la barre latérale
    };

    return (
        <div className={`sidebar-container ${isSidebarOpen ? '' : 'collapsed'}`}>
            {logos.map((logoItem, index) => (
                <div className={`logo-primaire ${isSidebarOpen ? '' : 'logo-collapsed'}`} key={index}>
                    <img src={logoItem.imge} alt={logoItem.name} style={{width:'20%', gap:'1.5rem', borderRadius:'45px',height:'7vh'}} />
                </div>
            ))}
            
            <div className="toggle-icon" onClick={toggleSidebar}>
                <BiMenu className="icon" />
            </div>

            <div className="menu">
                <div className="menu--list">
                    <a href="" className="item active">
                        <BiHome className="icon" />
                        {isSidebarOpen && <span className="text">Accueil</span>}
                    </a>
                    <a href="" className="item">
                        <BiMessage className="icon" />
                        {isSidebarOpen && <span className="text">Message</span>}
                    </a>
                    <a href="" className="item">
                        <BiSolidReport className="icon" />
                        {isSidebarOpen && <span className="text">Rapport</span>}
                    </a>
                    <a href="" className="item">
                        <BiStats className="icon" />
                        {isSidebarOpen && <span className="text">Statistiques</span>}
                    </a>
                    <a href="" className="item">
                        <BiTask className="icon" />
                        {isSidebarOpen && <span className="text">Tâche</span>}
                    </a>
                    <a href="" className="item">
                        <BiHelpCircle className="icon" />
                        {isSidebarOpen && <span className="text">Aide</span>}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
