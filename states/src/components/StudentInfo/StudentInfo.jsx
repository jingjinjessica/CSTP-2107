
import StudentCard from '../StudentCard/StudentCard';
import './StudentInfo.css';

const StudentInfo = ({data}) => {
    return (
        <div className='student-card-container' >
        {
          data.map((studentData) => {
            return  <StudentCard data={studentData} />
          })
        }
      </div>
    )
}

export default StudentInfo;