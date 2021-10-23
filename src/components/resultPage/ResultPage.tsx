import "../../style/Result.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import KakaoShareButton from "./KakaoShareButton";
import {apiClient} from "../../utils";
import ClipboardCopy from "./ClipboardCopy";
import Loading from "../Loading";

const Parsing = (CharacterId: string) => {
    const [state, setState] = useState();
    useEffect((): any => {
        const CallApi = async (resultId: string) => {
            try {
                const result = await apiClient
                    .get(`/result/${resultId}`)

                const data = await result.data;
                if (data.resultCode === 200) {
                    setState(data.resultData);
                }
            } catch (e) {
                console.log("exception")
            }
        }
        CallApi(CharacterId);
    }, [CharacterId]);
    if (!state) return null;
    return state
}

type ResultProps = {
    match: {
        params : {
            id : string
        }
    }
}
//@ts-ignore
const ResultPage = ({match}:ResultProps) => {
    const CharacterId = match.params.id;
    const responseData = Parsing(CharacterId)

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    if (!responseData) return (
        <Loading/>
    )

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
                        <img
                            id="poster"
                            src={require(`../../images/${responseData['id']}.png`).default + `?w=440&h=440&quality=75`}
                            alt={responseData['image']}
                            style={{"width": "220px", "height": "220px"}}
                        />
                    </div>
                    <div className="explanation_container">
                        <div className="explanation_title">
                            {
                                //@ts-ignore
                                responseData['famous_line'].split('\\n').map((line, idx) => {
                                    return (<span key={idx}>{line}<br/></span>)
                                })
                            }
                        </div>
                        <div className="explanation_text">
                            {responseData['explanation']}
                        </div>
                    </div>
                </div>
                <div className="bottom-result">
                    <Link to="/">
                        <button className="sns-button" type="button">테스트 다시하기</button>
                    </Link>
                    <ClipboardCopy/>
                    <KakaoShareButton/>
                </div>
            </div>
        </section>);
};

export default ResultPage;
