import {useRecoilState, useRecoilValue, useResetRecoilState} from "recoil";
import {initQuestionList, QuestionIdx} from "../store/store";
// import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
// import axios from "axios";

const QuestionArea = () => {

    const [idx, setIdx] = useRecoilState(QuestionIdx)
    const resetIdx = useResetRecoilState(QuestionIdx)
    useEffect(() => {
        resetIdx()
    }, [resetIdx])
    const currentQuestion = useRecoilValue(initQuestionList(idx))

    useEffect(() => {
    }, [idx])

    const [typeArray, setTypeArray] = useState<string[]>([])
    const ToNextStep = async (e: any, answerType: string) => {

        if (idx <= 10) {
            setTypeArray([...typeArray, answerType]);
            setIdx(idx + 1);
        } else if (idx === 11) {
            const tempArray = [...typeArray, answerType]
            const resultObj: { [index: string]: string } = {
                "1":'',
                "2": '',
                "3": '',
                "4": '',
                "5": '',
                "6": '',
                "7": '',
                "8": '',
                "9": '',
                "10": '',
                "11": '',
                "12": '',
            };
            tempArray.forEach((ele, idx) => {
                const id = (idx + 1).toString()
                resultObj[id] = ele
            })
            resetIdx()
            try {
                console.log('obj', resultObj)
                // const result = await axios.get("http://localhost:5000/hospital/postAnswers", {
                //     params: resultObj
                // }); // http 쓰지 않으면 cors 에러 난다.
                // console.log(result)
            } catch (e){
            //     alert(e)
                console.log(e)
            }
        }
    }

    return (
        <div className="test-bottom">
            <div className="question-container">
                {currentQuestion['title']}
            </div>
            <div className="answers">
                {
                    idx < 11 ? (
                        <button className="answers_wrap"
                                onClick={(e) => ToNextStep(e, currentQuestion['answerAType'])}
                        >
                            {currentQuestion['answerA']}
                        </button>
                    ) : (
                        (<Link to="/resultpage" style={{"textDecoration": "none", "color": "black"}}>
                            <button className="answers_wrap"
                                    onClick={(e) => ToNextStep(e, currentQuestion['answerAType'])}
                            >
                            {currentQuestion['answerA']}
                            </button>
                        </Link>)
                    )
                }

                {
                    idx < 11 ? (
                        <button className="answers_wrap"
                                onClick={(e) => ToNextStep(e, currentQuestion['answerBType'])}
                        >
                            {currentQuestion['answerB']}
                        </button>
                    ) : (
                        (<Link to="/resultpage" style={{"textDecoration": "none", "color": "black"}}>
                            <button className="answers_wrap"
                                    onClick={(e) => ToNextStep(e, currentQuestion['answerBType'])}
                            >
                                {currentQuestion['answerB']}
                            </button>
                        </Link>)
                    )
                }
            </div>

            <div className="status-bar">
                {/*<StatusBar/>*/}
                {/*굳이 styled-componenets 로 하지말고 컴포넌트로 만들어보자*/}
            </div>
        </div>
    );
}

export default QuestionArea;
