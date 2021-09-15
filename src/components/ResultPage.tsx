// import 겨울 from '../겨울.png'
import "../style/Result.css"
import {Link} from "react-router-dom";
import {useRecoilState, useRecoilValue} from "recoil";
import {IsLoading, ResponseData} from "../store/store";
import QuestionImg from "./QuestionImg";
import Loading from "./Loading";

const ResultPage = () => {
    const responseData = useRecoilValue(ResponseData);
    const [loading, setLoading] = useRecoilState<boolean>(IsLoading);
    if (loading) return <Loading type="spin" color="red" message={"wait"}/>;

    return (
        <section id="main_contents">
            <div className="wrapper">
                <div className="upper-result">
                    <div className="result_title_container" style={{
                        "position": "relative"
                    }}>
                        나와 닮은 의사는 <br/>
                        {responseData['title'] && responseData['title']} 입니다.
                        <div className="result_title_above"
                             style={{"position": "absolute", "top": "-45px", "right": "1px"}}>
                            ++
                        </div>
                    </div>
                    <div className="image_container" style={{
                        "position": "relative",
                        "top": "-20px",
                    }}>
                        <QuestionImg/>
                    </div>
                </div>
                <div className="bottom-result">
                    <Link to="/">
                        <button className="result-button" type="button">테스트 다시하기</button>
                    </Link>
                    <div id="sns-buttons">
                        <button className="sns-button" type="button">
                            카카오
                        </button>
                        <button className="sns-button" type="button">
                            인스타
                        </button>
                        <button className="sns-button" type="button">
                            페이스북
                        </button>
                    </div>

                </div>
            </div>
        </section>);
}

export default ResultPage;
