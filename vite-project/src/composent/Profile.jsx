import ProfileHeader from './profileHeader';
import '../styles/profile.css';
import Image1 from '../image/img1.png'
import { BiBook } from 'react-icons/bi';

const course = [
    {
        title: 'Informaticien',
        duration:'2 Houres',
        icon: <BiBook/>
    }
]
const Profile = () =>{
    return(
        <div className="profile">
            <ProfileHeader />

            <div className="user--profile">
                <div className="user--detail">
                    <img src={Image1} alt="" />
                    <h3 className='username'>Al Bert</h3>
                    <span className='profession'>Etudiant</span>
                </div>
                <div className="user--course">
                {
                course.map((course) => (
                    <div className='course' key={course}>
                        <div className="course--detail">
                            <div className="course--cover">
                            {course.icon}
                            </div>
                            <div className="course--name">
                                <h5 className="title">{course.title}</h5>
                            </div>

                        </div>
                    </div>
                ))
            }
                </div>
            </div>
        </div>
    )
}
export default Profile