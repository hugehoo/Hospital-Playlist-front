import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {ResultObj} from "../store/store";
import {chooseSingleType, switchType} from "../utils";

const TempPage = () => {
    const state = useRecoilValue(ResultObj)
    //@ts-ignore
    const resultId: number = switchType(chooseSingleType(state));
    return (
        <Link to={`/resultpage/${resultId}`} style={{"textDecoration": "none", "color": "black"}}>
            <button>button</button>
        </Link>
    );
}

export default TempPage
