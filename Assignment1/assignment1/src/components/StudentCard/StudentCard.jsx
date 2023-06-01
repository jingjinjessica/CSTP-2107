import './StudentCard.css';
const StudentCard = ({ data }) =>{
    return (
        <div className='wapper'>
            <div className='card-container'>
                <div className='card-header'>
                    <img src={data.avatar} alt="" width="100px" height="150px" />
                </div>
                <div className='card-body' >
                    <div className='nested'>
                        <span className='data-titile'>Name:</span>
                        <br></br>
                        <span> {data.first_name},{data.last_name}</span>
                    </div>
                    <div className='nested'>
                        <span className='data-titile'>Email: </span>
                        <span> {data.email}</span>
                    </div>
                </div>
            
                
            </div>
        </div>
    )
}

export default StudentCard;