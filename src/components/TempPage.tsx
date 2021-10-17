import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {ResultObj} from "../store/store";
import {chooseSingleType, switchType} from "../utils";

const TempPage = () => {
    const state = useRecoilValue(ResultObj)
    //@ts-ignore
    const resultId: number = switchType(chooseSingleType(state));
    return (

        <section id="main_contents">
            <div className="wrapper" id="wrapper-temp" style={{background: "#C6F8FF"}}>
                <div
                    style={{width: "375px"}}
                >
                    <Link to={`/resultpage/${resultId}`} style={{"textDecoration": "none", "color": "black"}}>
                        <button id="temp-button"> 결과 보러가기</button>
                    </Link>
                </div>
            </div>
        </section>);
}

export default TempPage
