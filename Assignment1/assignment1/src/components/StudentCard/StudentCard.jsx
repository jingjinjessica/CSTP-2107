import './StudentCard.css';
const StudentCard = ({ data }) =>{
    return (
        <div className='card-container'>
            <div className='card-header'>
                <img src={data.avatar} alt=""/>
            </div>
            <div className='card-body'>
                <div>
                    <span>Name:</span>
                    <span> {data.first_name},{data.last_name}</span>
                </div>
                <div>
                    <span>Email: </span>
                    <span> {data.email}</span>
                </div>
            </div>
           
            
        </div>
    )
}

export default StudentCard;