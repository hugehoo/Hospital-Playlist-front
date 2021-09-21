import {useRecoilValue} from "recoil";
import {ResponseData} from "../store/store";


const QuestionImg = () => {
    const responseData = useRecoilValue(ResponseData);
    // const imageName = responseData['image'] ? responseData['image'] : '슬의' // undefined 일 때도 작용

    const imageName = responseData['image'] || '슬의' // 오호 이거 ?? nullish colleasing 으로 하면 아작나네, || 은 ok, undefined 라서 그렇구만 null 이 아니라,
    // 그럼 if(!responseData['image'] 가 됐던 이유도 undefined 여서..?
    return (
            <img
                id="poster"
                src={require(`../images/${imageName}.png`).default}
                alt={ imageName}
                style={{"width":"250px"}}
            />
    );
}

export default QuestionImg;
