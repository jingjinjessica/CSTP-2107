
import './StudentCard.css';

const StudentCard = ({ data }) => {
    return (
        <div className='card-container' >
            <div className='card-header'>
                <img src={data.avatar} width="200px" alt=""/>
            </div>
            <div className='card-body'>
                <span>{data.first_name}</span>
                <span>{data.last_name}</span>
                <span>{data.email}</span>
            </div>
            
        </div>
    )
}
export default StudentCard;