import "../../style/Testpage.css"
import {useRecoilValue, useResetRecoilState} from "recoil";
import {initQuestionList, QuestionIdx} from "../../store/store";
import {useEffect} from "react";
import AnswerButton from "./AnswerButton";
import Bar from "./Bar";
import TempPage from "../tempPage/TempPage";

const TestPage = () => {
    const idx = useRecoilValue(QuestionIdx)
    const resetIdx = useResetRecoilState(QuestionIdx)
    const currentQuestion = useRecoilValue(initQuestionList(idx))

    useEffect(() => {
        resetIdx()
    }, [resetIdx])
    const gauge = Math.floor(idx / 11 * 100)
    if (idx === 12) {
        return <TempPage/>
    }
    return (
        <section id="main_contents">
            <div className="wrapper">
                <div className="test-upper">
                    <div className="test-upper-title">
                        내가 율제병원<br/> 인턴이라면?
                    </div>
                    <img
                        id="test-photo"
                        src={require(`../../images/${idx + 1}.png`).default + `?w=250&h=250&quality=75`}
                        alt="슬의"
                    />

                </div>

                <div className="test-bottom">
                    <div className="question-container">
                        <div className="question-number">{`Q${currentQuestion.id}`}</div>
                        <div className="question-title">
                            {
                                currentQuestion['title'].split('\n').map((line, idx) => {
                                    return (<span key={idx}>{line}<br/></span>)
                                })
                            }
                        </div>
                    </div>
                    <div className="answers">
                        <AnswerButton/>
                    </div>
                    <Bar
                        key={`bar-item-${idx}`}
                        percent={gauge}
                        isSelected={true}
                    />
                </div>
            </div>
        </section>);
}

export default TestPage;
