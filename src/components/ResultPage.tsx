import "../style/Result.css"
import {Link} from "react-router-dom";
// import {useRecoilValue} from "recoil";
// import {
    // IsError, IsLoading,
    // ResponseData} from "../store/store";
// import QuestionImg from "./QuestionImg";
// import Loader from "./Loading";
import {useEffect, useState} from "react";
import KakaoShareButton from "./KakaoShareButton";
import {apiClient} from "./utils";
// import ErrorPage from "./ErrorPage";
// import Loading from "./Loading";

const Parsing = (CharacterId: any) => {
    const [state, setState] = useState();
    useEffect(() :any => {
        const result = {
            1: "E",
            2: "E",
            3: "N",
            4: "N",
            5: "I",
            6: "P",
            7: "T",
            8: "T",
            9: "T",
            10: "J",
            11: "J",
            12: "N"
        }

        const CallApi = async (resultObj: Object) => {
            try {
                console.log('try', resultObj)
                const result = await apiClient.get('/result', {
                    params: resultObj
                })
                const data = await result.data;
                if (data.resultCode === 200) {
                    setState(data.resultData);
                } else {
                    console.log("error")
                }
            } catch (e) {
                console.log("exception")
            }
        }
        CallApi(result);
    }, [CharacterId]);

    if (!state)  return null;
    return state


}
//@ts-ignore
const ResultPage = ({location, match}) => {
    console.log('*****************', location, match);
    const CharacterId = match.params.id;
    const responseData = Parsing(CharacterId)

    console.log("========CharacterId=========",CharacterId)
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    // const responseData = useRecoilValue(ResponseData);
    // const loading = useRecoilValue<boolean>(IsLoading);
    // const error = useRecoilValue<boolean>(IsError);
    // if (loading) {
    //     @ts-ignore
    //     return <Loader type="spin" color="red" message={"wait"}/>;
    // }
    // if (error) {
    //     return <ErrorPage/>
    // }

    // if (!responseData) {
    // // @ts-ignore
    // return <Loader type="spin" color="red" message={"wait"}/>;
    // }
    if(!responseData) return <div>...loading</div>
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
                        {/*<QuestionImg/>*/}

                        <img
                            id="poster"
                            src={require(`../images/${responseData['image']}.jpeg`).default + `?w=440&h=440&quality=75`}
                            alt={responseData['image']}
                            style={{"width": "220px", "height":"220px"}}
                        />
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
};

export default ResultPage;
