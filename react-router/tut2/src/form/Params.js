import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {useSearchParams} from 'react-router-dom'

function Param()
{
    const params = useParams();
    const {name} = params;

    const [searchParam , setsearchParam] = useSearchParams();
    //console.warn(searchParam.get('age'))

    const age = searchParam.get('age')
    
    return(
        <div>
            <h1>This is {name}'s Page</h1>
            <h3> To know more about us <Link to="/about"> Go to About Us </Link> link </h3>
             
            <h1>SearchParams and setSearchParams</h1>
            <h3> Age is : {age} </h3>
            <button onClick={(e)=>setsearchParam({age:40})}> Set age in Query Params </button>
            <input type="text" onChange={(e)=>setsearchParam({text:e.target.value})} placeholder="Set text in Query Params"/>


        </div>
    )
}

export default Param;