import {Link} from "react-router-dom";
import {initQuestionList, QuestionIdx, ResponseData} from "../store/store";
import {useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState} from "recoil";
import {useState} from "react";
import {apiClient} from "./utils";

const AnswerButton = () => {
    const setResponseData = useSetRecoilState(ResponseData);
    const resetIdx = useResetRecoilState(QuestionIdx)
    const [idx, setIdx] = useRecoilState(QuestionIdx)
    const currentQuestion = useRecoilValue(initQuestionList(idx))
    const [state, setState] = useState({
        "1": '',
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
    })

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
            resetIdx()
            await CallApi(resultObj)
        }
    }

    const CallApi = async (resultObj: Object) => {
        try {
            console.log('try', resultObj)
            const result = await apiClient.get('/result', {
                params: resultObj
            })
            const data = await result.data;
            if (data.resultCode === 200) {
                setResponseData(data.resultData);
            } else {
                console.log("error")
            }
        } catch (e) {
            console.log("exception")
        }
    }

    return (
        <>
            {
                idx < 11 ? (
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
                ) : (
                    <>
                        <Link to="/temppage" style={{"textDecoration": "none", "color": "black"}}>
                            <button className="answers_wrap"
                                    onClick={(e) => ToNextstep(e, currentQuestion['answerAType'])}
                            >
                                {currentQuestion['answerA']}
                            </button>
                        </Link>

                        <Link to="/temppage" style={{"textDecoration": "none", "color": "black"}}>
                            <button className="answers_wrap"
                                    onClick={(e) => ToNextstep(e, currentQuestion['answerBType'])}
                            >
                                {currentQuestion['answerB']}
                            </button>
                        </Link>
                    </>
                )
            }


            {/*{*/}
            {/*    idx < 11 ? (*/}
            {/*        <button className="answers_wrap"*/}
            {/*                onClick={(e) => ToNextstep(e, currentQuestion['answerAType'])}*/}
            {/*        >*/}
            {/*            {currentQuestion['answerA']}*/}
            {/*        </button>*/}
            {/*    ) : (*/}
            {/*        (<Link to="/temppage" style={{"textDecoration": "none", "color": "black"}}>*/}
            {/*            <button className="answers_wrap"*/}
            {/*                    onClick={(e) => ToNextstep(e, currentQuestion['answerAType'])}*/}
            {/*            >*/}
            {/*                {currentQuestion['answerA']}*/}
            {/*            </button>*/}
            {/*        </Link>)*/}
            {/*    )*/}
            {/*}*/}

            {/*{*/}
            {/*    idx < 11 ? */}
            {/*    (*/}
            {/*        (<Link to="/temppage" style={{"textDecoration": "none", "color": "black"}}>*/}
            {/*            <button className="answers_wrap"*/}
            {/*                    onClick={(e) => ToNextstep(e, currentQuestion['answerBType'])}*/}
            {/*            >*/}
            {/*                {currentQuestion['answerB']}*/}
            {/*            </button>*/}
            {/*        </Link>)*/}
            {/*    ): (*/}
            {/*        (<Link to="/temppage" style={{"textDecoration": "none", "color": "black"}}>*/}
            {/*            <button className="answers_wrap"*/}
            {/*                    onClick={(e) => ToNextstep(e, currentQuestion['answerBType'])}*/}
            {/*            >*/}
            {/*                {currentQuestion['answerB']}*/}
            {/*            </button>*/}
            {/*        </Link>)*/}
            {/*    )*/}
            {/*}*/}
        </>
    )
}

export default AnswerButton;
