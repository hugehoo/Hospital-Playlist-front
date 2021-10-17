import "../style/Testpage.css"
import {useRecoilValue, useResetRecoilState} from "recoil";
import {QuestionIdx} from "../store/store";
import {useEffect} from "react";
import QuestionArea from "./QuestionArea";

const TestPage = () => {
    const idx = useRecoilValue(QuestionIdx)
    const resetIdx = useResetRecoilState(QuestionIdx)
    useEffect(() => {
        resetIdx()
    }, [resetIdx])

    return (
        <section id="main_contents">
            <div className="wrapper">
                <div className="test-upper">
                    <div className="test-upper-title">
                        내가 율제 병원<br/> 인턴이라면?
                    </div>
                    <img id="test-photo"
                         src={require(`../images/${idx+1}.jpeg`).default + `?w=440&h=440&quality=75`}
                         alt="슬의"/>

                </div>

                <QuestionArea/>

            </div>
        </section>);
}

export default TestPage;
