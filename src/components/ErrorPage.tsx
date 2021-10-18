import "../style/Main.css"
import {Link} from "react-router-dom";


const ErrorPage = () => {
    return (
        <section id="main_contents">
            <div className="wrapper">
                <div className="upper">
                    <div className="main_title_container" style={{
                        "position": "relative",
                        fontSize: "28px"
                    }}>
                        잘못된 경로입니다.
                    </div>
                    <div className="image_container" style={{
                        "position": "relative",
                        "top": "-20px",
                    }}>
                        {/*<img id="poster" loading="lazy" src={poster*/}
                        {/*+ getParametersForUnsplash({*/}
                        {/*    width: '380px',*/}
                        {/*    height: '282px',*/}
                        {/*    quality: 80,*/}
                        {/*    format: 'png'*/}
                        {/*})} alt="슬의"*/}
                        {/*     style={{"width": "380px", "height": "282px"}}*/}
                        {/*/>*/}
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
                    <Link to={"/"}>
                        <button className="start-button" type="button">시작 페이지로</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage;
