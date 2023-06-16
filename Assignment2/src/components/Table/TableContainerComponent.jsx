import { useEffect,useState } from "react";
import TableComponent from "./TableComponent";


const TableContainerComponent = () => {
    const [FlagData, setFlagData] = useState([]);

    useEffect( () => {
       getFlagData(); 
    },[])

    const getFlagData = async () => {
        const data = await fetch(`https://restcountries.com/v3.1/all`);
        //console.log(data,'data');
        const convertedJSONData = await data.json();
        //console.log(convertedJSONData,'datacon')
        setFlagData(convertedJSONData);
    }
    return(
        <div>
            <TableComponent data={FlagData} />
        </div>
    )
}
export default TableContainerComponent;