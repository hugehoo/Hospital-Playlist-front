import "../style/Result.css"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import KakaoShareButton from "./KakaoShareButton";
import {apiClient} from "./utils";
import ClipboardCopy from "./ClipboardCopy";

const Parsing = (CharacterId: any) => {
    const [state, setState] = useState();
    useEffect((): any => {
        const CallApi = async (resultId: string) => {
            try {
                const result = await apiClient.get(`/result?id=${resultId}`)
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
        CallApi(CharacterId);
    }, [CharacterId]);
    if (!state) return null;
    return state
}
//@ts-ignore
const ResultPage = ({location, match}) => {
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

    if (!responseData) return <div className="ping">
        <img src="../images/슬의.jpeg" alt=""/>
    </div>
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
                        {/* 결과 이미지*/}
                        <img
                            id="poster"
                            src={require(`../images/${responseData['id']}.png`).default + `?w=440&h=440&quality=75`}
                            alt={responseData['image']}
                            style={{"width": "220px", "height": "220px"}}
                        />
                    </div>
                    <div className="explanation_container">
                        <div className="explanation_title">
                            {/*{responseData['famous_line']}*/}
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
