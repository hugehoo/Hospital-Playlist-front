import {atom, atomFamily} from "recoil";
import contents from '../contents.json';
import {recoilPersist} from "recoil-persist";


const {persistAtom} = recoilPersist();

interface IResponseData {
    id: number
    explanation: string
    image: string
    mbti: string
    title: string
    famous_line: string
}
export const ResponseData = atom<IResponseData>({
    "key": "ResponseData",
    "default": {
        id: 0,
        explanation: '',
        image: '',
        mbti: '',
        title: '',
        famous_line:''
    },
    // effects_UNSTABLE: [persistAtom]
})

export const IsLoading = atom<boolean>({
    "key": "IsLoading",
    "default" : false
})

export const IsError = atom<boolean>({
    "key": "IsError",
    "default" : false
})

export const QuestionList = atom<IQuestion[]>({
    "key": "TestList",
    "default": [],
})


// atomfamily의 2번째 타입에 number 써주니 SerializableParam 타입 문제 해결
export const initQuestionList = atomFamily<IQuestion, number>({
    "key": "TestList",
    "default": id => getQuestion(id),
})

const getQuestion = (id: number) => {
    return contents[id]
}

export const QuestionIdx = atom<number>({
    key: "QuestionIdx",
    default: 0
})


export interface IQuestion {
    "id": number,
    "title": string,
    "answerA": string,
    "answerB": string,
    "answerAType": string,
    "answerBType": string,
}

export interface IAnswers {
    "1": string,
    "2": string,
    "3": string,
    "4": string,
    "5": string,
    "6": string,
    "7": string,
    "8": string,
    "9": string,
    "10": string,
    "11": string,
    "12": string,
}

// export const currentQuestion = selector({
//     key: "currentQuestion",
//     get: async ({get}) => {
//         const questions = get(QuestionList)
        // const currentIdx = get(QuestionIdx)
        // const response = await axios.get("http://localhost:4000/hospital") // http 쓰지 않으면 cors 에러 난다.
        // const data = response.data
        // return data.filter((question: { id: number; }) => question.id === currentIdx)[0]
    // },
// })
