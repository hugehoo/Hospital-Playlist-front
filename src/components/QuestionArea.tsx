import {useRecoilValue, useResetRecoilState} from "recoil";
import {initQuestionList, QuestionIdx} from "../store/store";
import {useEffect} from "react";
import AnswerButton from "./AnswerButton";
import Bar from "./Bar";

const QuestionArea = () => {
    const idx = useRecoilValue(QuestionIdx)
    const resetIdx = useResetRecoilState(QuestionIdx)
    const currentQuestion = useRecoilValue(initQuestionList(idx))

    useEffect(() => {
        resetIdx()
    }, [resetIdx])

    useEffect(() => {
    }, [idx])
    const gauge = Math.floor(idx / 11 * 100)
    return (
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
    );
}

export default QuestionArea;
