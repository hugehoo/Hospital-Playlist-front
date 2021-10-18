import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {ResultObj} from "../store/store";
import {chooseSingleType, switchType} from "../utils";
import poster from "../images/슬의.jpeg";

const TempPage = () => {
    const state = useRecoilValue(ResultObj)
    //@ts-ignore
    const resultId: number = switchType(chooseSingleType(state));
    return (

        <section id="main_contents">
            <div className="wrapper" id="wrapper-temp" style={{background: "#C6F8FF", borderRadius: 'none'}}>
                <div
                    style={{width: "375px"}}
                >
                    <img id="poster" loading="lazy" src={poster} alt="슬의"
                         style={{"width": "380px", "height": "282px", marginBottom:"20px"}}
                    />
                    <Link to={`/resultpage/${resultId}`} style={{"textDecoration": "none", "color": "black"}}>
                        <button id="temp-button"> 나와 닮은 캐릭터는? </button>
                    </Link>
                </div>
            </div>
        </section>);
}

export default TempPage
