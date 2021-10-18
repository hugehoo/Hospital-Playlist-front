import "../style/Main.css"
import poster from "../images/슬의.jpeg"
import {Link} from "react-router-dom";
import {lazy, useEffect} from "react";
import {useResetRecoilState} from "recoil";
import {IsError, IsLoading, QuestionIdx, ResponseData} from "../store/store";

const lazyWithPreload = (importFunction: any) => {
    const Component = lazy(importFunction);
    //@ts-ignore
    Component.preload = importFunction;
    // 이게 의미하는게 뭐야. Component 에 원래 preload 라는 property 가 존재하는 거야. 아니면 이 라인에서 주입해주는거야?
    // 원래 프로퍼티는 있는데, 이 때 정의를 해주는 것 같다. 이전까진 undefined 상태.
    return Component
}
const LazyImageModal = lazyWithPreload(() => import("../images/슬의.jpeg"))

const Main = () => {
    const resetIdx = useResetRecoilState(QuestionIdx)
    const responseData = useResetRecoilState(ResponseData)
    const error = useResetRecoilState(IsError)
    const loading = useResetRecoilState(IsLoading)

    useEffect(() => {
        resetIdx()
        responseData()
        error()
        loading()
    }, [resetIdx, responseData, error, loading])

    //@ts-ignore
    const getParametersForUnsplash = ({width, height, quality, format}) => {
        return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`
    }

    useEffect(() => {
        //@ts-ignore
        LazyImageModal.preload();
        const img = new Image();
        img.src = "./images/슬의.jpeg"

    }, []);

    return (
        <section id="main_contents">
            <div className="wrapper">
                <div className="upper">
                    <div className="main_title_container" style={{
                        "position": "relative",
                        fontSize : "25px"

                    }}>
                        보고싶다 시즌3!
                    </div>
                    <div className="image_container" style={{
                        "position": "relative",
                        "top": "-20px",
                    }}>
                        <img className="ping" id="poster" loading="lazy" src={poster
                        + getParametersForUnsplash({
                            width: '380px',
                            height: '282px',
                            quality: 80,
                            format: 'png'
                        })} alt="슬의"
                             style={{"width": "380px", "height": "282px"}}
                        />
                    </div>
                </div>
                <div className="bottom">
                    <div className="subtitles">
                        <div className="sub_title">#시즌3 기원</div>
                        <div className="sub_title">#시즌3 존버</div>
                    </div>
                    <div className="result_data">
                        <div className="data_wrap" style={{fontSize: "25px"}}>
                            잠시만 기다려 주세요 :)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;
