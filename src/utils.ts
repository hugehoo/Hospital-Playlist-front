import {lazy} from "react";

export const MBTI_ARRAY = ["E", "I", "N", "S", "F", "T", "P", "J"]

export const chooseSingleType = (obj: {[idx: string]: string}) => {
    const newObj = {};
    Object.values(obj).forEach(v => {
        //@ts-ignore
        newObj[v] = newObj[v] + 1 || 1
    })
    return countElements(newObj)
}

export const countElements = (obj:{}) => {
    const result = Object.keys(obj).filter(key => {
        //@ts-ignore
        return obj[key] > 1;
    });
    return decideMBTI(result)
}

export const decideMBTI = (data: string[]) => {
    let finalResult = ''
    MBTI_ARRAY.forEach(type => {
        if (data.includes(type)) {
            finalResult += type
        }
    })
    return finalResult
}

//@ts-ignore
export const switchType = (mbtiType) => {
    switch (mbtiType) {
        case "INFJ":
            return 1;
        case "ISFP":
            return 2;
        case "INFP":
            return 3;
        case "INTP":
            return 4;
        case "ISFJ":
            return 5;
        case "INTJ":
            return 6;
        case "ESFP":
            return 7;
        case "ENFP":
            return 8;
        case "ESFJ":
            return 9;
        case "ESTJ":
            return 10;
        case "ENTJ":
            return 11;
        case "ENTP":
            return 8;
        case "ESTP":
            return 7;
        case "ISTP":
            return 2;
        case "ISTJ":
            return 5;
        case "ENFJ":
            return 1;
        default:
            return 1;
    }
};


//@ts-ignore
export const getParametersForUnsplash = ({width, height, quality, format}) => {
    return `?w=${width}&h=${height}&q=${quality}&fm=${format}&fit=crop`
}

export const lazyWithPreload = (importFunction: any) => {
    const Component = lazy(importFunction);
    //@ts-ignore
    Component.preload = importFunction;
    // 이게 의미하는게 뭐야. Component 에 원래 preload 라는 property 가 존재하는 거야. 아니면 이 라인에서 주입해주는거야?
    // 원래 프로퍼티는 있는데, 이 때 정의를 해주는 것 같다. 이전까진 undefined 상태.
    return Component
}
