import {useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState} from "recoil";
import {initQuestionList, IsError, IsLoading, QuestionIdx, ResponseData} from "../store/store";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {apiClient} from "./utils";

const QuestionArea = () => {
    const setResponseData = useSetRecoilState(ResponseData);
    const [idx, setIdx] = useRecoilState(QuestionIdx)
    const resetIdx = useResetRecoilState(QuestionIdx)
    const setLoading = useSetRecoilState<boolean>(IsLoading);
    const setError = useSetRecoilState<boolean>(IsError);
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

    useEffect(() => {
        resetIdx()
    }, [resetIdx])
    const currentQuestion = useRecoilValue(initQuestionList(idx))

    useEffect(() => {
    }, [idx])

    const [typeArray, setTypeArray] = useState<string[]>([])
    const ToNextstep = async (e: any, answerType: string) => {
        setState({
            ...state,
            [idx + 1] : answerType,
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

    const CallApi = async (tempResult:any) => {
        try {
            console.log('try', tempResult)
            // setLoading(true);
            const result = await apiClient.get('/result', {
                params: tempResult
            })
            const data = await result.data;
            if (data.resultCode === 200) {
                setResponseData(data.resultData);
                // setTimeout(() => setLoading(false), 0);
            } else {
                console.log("error")
                // setLoading(false);
                // return <ErrorPage/>
            }
        } catch (e) {
            console.log("exception")
            // setError(true)
            // return <ErrorPage/>
        }
    }
    // const ToFinalStep = async (e: any, answerType: string) => {
    //
    //     const tempArray = [...typeArray, answerType]
    //     const resultObj: { [index: string]: string } = {
    //         "1": '',
    //         "2": '',
    //         "3": '',
    //         "4": '',
    //         "5": '',
    //         "6": '',
    //         "7": '',
    //         "8": '',
    //         "9": '',
    //         "10": '',
    //         "11": '',
    //         "12": '',
    //     };
    //     tempArray.forEach((ele, idx) => {
    //         const id = (idx + 1).toString()
    //         resultObj[id] = ele
    //     })
    // }
    // const ToNextStep = async (e: any, answerType: string) => {
    //
    //     if (idx <= 10) {
    //         setTypeArray([...typeArray, answerType]);
    //         setIdx(idx + 1);
    //     } else if (idx === 11) {
    //         const tempArray = [...typeArray, answerType]
    //         const resultObj: { [index: string]: string } = {
    //             "1": '',
    //             "2": '',
    //             "3": '',
    //             "4": '',
    //             "5": '',
    //             "6": '',
    //             "7": '',
    //             "8": '',
    //             "9": '',
    //             "10": '',
    //             "11": '',
    //             "12": '',
    //         };
    //         tempArray.forEach((ele, idx) => {
    //             const id = (idx + 1).toString()
    //             resultObj[id] = ele
    //         })
    //         resetIdx()
    //         try {
    //             setLoading(true);
    //             const result = await apiClient.get('/result', {
    //                 params: resultObj
    //             })
    //             const data = await result.data;
    //             if (data.resultCode === 200) {
    //                 setResponseData(data.resultData);
    //                 setTimeout(() => setLoading(false), 0);
    //             } else {
    //                 console.log("error")
    //                 setLoading(false);
    //                 // return <ErrorPage/>
    //             }
    //         } catch (e) {
    //             console.log("exception")
    //             setError(true)
    //             // return <ErrorPage/>
    //         }
    //     }
    // }

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
                {
                    idx < 11 ? (
                        <button className="answers_wrap"
                                onClick={(e) => ToNextstep(e, currentQuestion['answerAType'])}
                        >
                            {currentQuestion['answerA']}
                        </button>
                    ) : (
                        (<Link to="/temppage" style={{"textDecoration": "none", "color": "black"}}>
                            <button className="answers_wrap"
                                    onClick={(e) => ToNextstep(e, currentQuestion['answerAType'])}
                            >
                                {currentQuestion['answerA']}
                            </button>
                        </Link>)
                    )
                }

                {
                    idx < 11 ? (
                        <button className="answers_wrap"
                                onClick={(e) => ToNextstep(e, currentQuestion['answerBType'])}
                        >
                            {currentQuestion['answerB']}
                        </button>
                    ) : (
                        (<Link to="/temppage" style={{"textDecoration": "none", "color": "black"}}>
                            <button className="answers_wrap"
                                    onClick={(e) => ToNextstep(e, currentQuestion['answerBType'])}
                            >
                                {currentQuestion['answerB']}
                            </button>
                        </Link>)
                    )
                }
            </div>

            <div className="status-bar">
                {currentQuestion.id} / 12
            </div>
        </div>
    );
}

export default QuestionArea;
