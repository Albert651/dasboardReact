import '../styles/Listepro.css';
import Image from '../image/img1.png'

const proffesseur = [
    {
        image: Image,
        name: 'Kevine, Keen',
        duration: '20hours lesson',
        cost: '100',
    },
    {
        image: Image,
        name: 'Al, Bert',
        duration: '20hours lesson',
        cost: '100',
    },
    {
        image: Image,
        name: 'Zaho, Avao',
        duration: '20hours lesson',
        cost: '100',
    }
];
const Listepro = () => {
    return (
        <div className='prof--list'>
            <div className="liste--header">
                <h2>Service</h2>
                <select>
                    <option value="developpeur">Activiter</option>
                    <option value="admine">Developeur</option>
                    <option value="commerce">Commerce</option>
                </select>
            </div>
            <div className="list--container">
            {
                proffesseur.map((proffesseur) => (
                    <div className='list' key={proffesseur}>
                        <div className="proff--detail">
                            <img src= {proffesseur.image} alt={proffesseur.name} />
                            <h2>{proffesseur.name}</h2>
                        </div>
                        <span>{proffesseur.duration}</span>
                        <span>{proffesseur.cost}</span>
                        <span className="prof--todo">:</span>
                    </div>
                ))
            }
            </div>
        </div>
        
    );
};

export default Listepro;
