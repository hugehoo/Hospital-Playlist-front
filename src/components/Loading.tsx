import "../style/Main.css"
import poster from "../images/슬의.jpeg"
import {getParametersForUnsplash} from "../utils";


const Loading = () => {

    return (
        <section id="main_contents">
            <div className="wrapper">
                <div className="upper">
                    <div className="main_title_container" style={{
                        "position": "relative",
                        fontSize : "40px",
                        top:"30px"

                    }}>
                        보고싶다 시즌3!
                    </div>
                    <div id="loading-img" className="image_container">
                        <img
                            // className="ping"
                            id="poster" loading="lazy" src={poster
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
                <div className="bottom" style={{background:"#C5F9FF"}}>
                    <div className="subtitles">
                        <div className="sub_title">#시즌3 기원</div>
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

export default Loading;
