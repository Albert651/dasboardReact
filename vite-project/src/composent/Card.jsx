import { BiLogoAndroid, BiLogoHtml5, BiWifi } from 'react-icons/bi';

const course = [
    {
        title: 'Web Development',
        icon: <BiLogoHtml5 />,
        duration: '3 Hours', // Ajout d'une durée pour consistance
    },
    {
        title: 'App Development',
        duration: '2 Hours',
        icon: <BiLogoAndroid />
    },
    {
        title: 'Admine Reseau',
        duration: '2 Hours',
        icon: <BiWifi />
    },
];

const Card = () => {
    return (
        <div className='card--container'>
            {
                course.map((item, index) => (
                    <div className='card' key={index}>
                        <div className="card--cover">{item.icon}</div>
                        <div className="card--title">
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Card;
