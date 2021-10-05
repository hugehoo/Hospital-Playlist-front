import "../style/Main.css"
// import poster from "../images/슬의.avif"
import {Link} from "react-router-dom";
import {lazy, useEffect} from "react";
import {useResetRecoilState} from "recoil";
import {IsError, IsLoading, QuestionIdx, ResponseData} from "../store/store";
// import LazyImage from "./LazyImg";

const LazyImage = lazy(() => import("./LazyImg"))
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

    return (
        <section id="main_contents">
            <div className="wrapper">
                <div className="upper">
                    <div className="main_title_container" style={{
                        "position": "relative"
                    }}>
                        내가 율제병원<br/> 인턴이라면
                        <div className="main_title_above">
                            ++
                        </div>
                    </div>
                    <div className="image_container" style={{
                        "position": "relative",
                        "top": "-20px",
                    }}>
                        <LazyImage/>
                        {/*<img id="poster" width="400" height="282" loading="lazy" src={poster} alt="슬의"/>*/}
                    </div>
                </div>
                <div className="bottom">
                    <div className="subtitles">
                        <div className="sub_title">#슬기로운인턴생활</div>
                        <div className="sub_title">#나는_어떤_의사일까?</div>
                    </div>
                    <div className="result_data">
                        <div className="data_wrap">
                            나와 닮은 "슬기로운 의사생활" 등장인물 찾기
                        </div>
                    </div>
                    <Link to={"/testpage"}>
                        <button className="start-button" type="button">START</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Main;
