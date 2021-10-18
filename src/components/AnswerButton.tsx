import {initQuestionList, QuestionIdx, ResultObj} from "../store/store";
import {useRecoilState, useRecoilValue} from "recoil";

const AnswerButton = () => {
    const [idx, setIdx] = useRecoilState(QuestionIdx)
    const currentQuestion = useRecoilValue(initQuestionList(idx))
    const [state, setState] = useRecoilState(ResultObj)

    const ToNextstep = async (e: any, answerType: string) => {
        setState({
            ...state,
            [idx + 1]: answerType,
        })
        setIdx(idx => idx + 1);
        if (idx > 10) {
            const resultObj = {
                ...state,
                12: answerType
            }
            setState(resultObj)
        }
    }

    return (
        <>
            <button className="answers_wrap"
                    onClick={(e) => ToNextstep(e, currentQuestion['answerAType'])}
            >
                {currentQuestion['answerA']}
            </button>

            <button className="answers_wrap"
                    onClick={(e) => ToNextstep(e, currentQuestion['answerBType'])}
            >
                {currentQuestion['answerB']}
            </button>
        </>
    )
}

export default AnswerButton;
