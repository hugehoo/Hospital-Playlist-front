import {useRecoilValue, useResetRecoilState} from "recoil";
import {initQuestionList, QuestionIdx} from "../store/store";
import {useEffect} from "react";
import AnswerButton from "./AnswerButton";

const QuestionArea = () => {
    const idx = useRecoilValue(QuestionIdx)
    const resetIdx = useResetRecoilState(QuestionIdx)
    const currentQuestion = useRecoilValue(initQuestionList(idx))

    useEffect(() => {
        resetIdx()
    }, [resetIdx])

    useEffect(() => {
    }, [idx])


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

            <div className="status-bar">
                {currentQuestion.id} / 12
            </div>
        </div>
    );
}

export default QuestionArea;
