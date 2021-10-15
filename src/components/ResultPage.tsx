import "../style/Result.css"
import {Link} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {
    // IsError, IsLoading,
    ResponseData} from "../store/store";
import QuestionImg from "./QuestionImg";
import Loader from "./Loading";
import {useEffect} from "react";
import KakaoShareButton from "./KakaoShareButton";
// import ErrorPage from "./ErrorPage";
// import Loading from "./Loading";

const ResultPage = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const responseData = useRecoilValue(ResponseData);
    // const loading = useRecoilValue<boolean>(IsLoading);
    // const error = useRecoilValue<boolean>(IsError);
    // if (loading) {
    //     @ts-ignore
    //     return <Loader type="spin" color="red" message={"wait"}/>;
    // }
    // if (error) {
    //     return <ErrorPage/>
    // }
    if (!responseData) {
        // @ts-ignore
        return <Loader type="spin" color="red" message={"wait"}/>;
    }

    return (
        <section id="result_contents">
            <div className="wrapper">
                <div className="upper-result">
                    <div className="result_title_container" style={{
                        "position": "relative"
                    }}>
                        나와 닮은 의사는 <br/>
                        {responseData['title'] && responseData['title']} 입니다.
                    </div>
                    <div className="image_container" style={{
                        "position": "relative",
                        "top": "-20px",
                    }}>
                        <QuestionImg/>
                    </div>
                    <div className="explanation_container">
                        <div className="explanation_title">
                            {responseData['famous_line']}
                        </div>
                        <div className="explanation_text">
                            {responseData['explanation']}
                        </div>
                    </div>
                </div>
                <div className="bottom-result">
                    <Link to="/">
                        <button className="result-button" type="button">테스트 다시하기</button>
                    </Link>
                    <div id="sns-buttons">
                        {/*<button className="sns-button" type="button">*/}
                        <KakaoShareButton/>
                        {/*</button>*/}
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
