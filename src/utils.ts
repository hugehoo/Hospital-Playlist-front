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
        default:
            return 1;
    }
};
