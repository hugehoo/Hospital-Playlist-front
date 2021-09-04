import poster from "../슬의.png";
import "../style/Result.css"

const ResultPage = () => {


    return (
        <section id="main_contents">
            <div className="wrapper">
                <div className="upper-result">
                    <div className="result_title_container" style={{
                        "position": "relative"
                    }}>
                        나와 닮은 의사는 <br/>
                        OOO입니다.
                        <div className="result_title_above"
                             style={{"position": "absolute", "top": "-45px", "right": "1px"}}>
                            ++
                        </div>
                    </div>
                    <div className="image_container" style={{
                        "position": "relative",
                        "top": "-20px",
                    }}>
                        <img id="poster" src={poster} alt="슬의"/>
                    </div>
                </div>
                <div className="bottom-result">
                    <button className="result-button" type="button">테스트 다시하기</button>
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
        </section>)
}

export default ResultPage;
