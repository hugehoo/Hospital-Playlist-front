import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {ResponseData} from "../store/store";

const TempPage = () => {
    const responseData = useRecoilValue(ResponseData);
    console.log('--------------------', responseData)
    if (responseData.id !== 0) {
        return (
            // <Redirect
            //     to={{ pathname: `/resultpage/${resultNum}`, state: { isUser: true } }}
            // />
            <Link to={`/resultpage/${responseData.id}`} style={{"textDecoration": "none", "color": "black"}}>
                <button>button</button>
            </Link>
        );
    } else {
        return <div>...Loading</div>
    }

}

export default TempPage
