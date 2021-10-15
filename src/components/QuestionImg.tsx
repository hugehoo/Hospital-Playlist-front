import {useRecoilValue} from "recoil";
import {ResponseData} from "../store/store";


const QuestionImg = () => {
    const responseData = useRecoilValue(ResponseData);
    // const imageName = responseData['image'] ? responseData['image'] : '슬의' // undefined 일 때도 작용

    // const imageName = responseData['image'] || '슬의' // 오호 이거 ?? nullish colleasing 으로 하면 아작나네, || 은 ok, undefined 라서 그렇구만 null 이 아니라,
    // 그럼 if(!responseData['image'] 가 됐던 이유도 undefined 여서..?

    const imageName = responseData['image'] // 오호 이거 ?? nullish colleasing 으로 하면 아작나네, || 은 ok, undefined 라서 그렇구만 null 이 아니라,

    return (
        <img
            id="poster"
            src={require(`../images/${imageName}.jpeg`).default + `?w=440&h=440&quality=75`}
            alt={imageName}
            style={{"width": "220px", "height":"220px"}}
        />
    );
}

export default QuestionImg;
