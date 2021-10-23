import React, { useEffect } from 'react'
const KakaoShareButton = () => {
    useEffect(() => {
        createKakaoButton()
    }, [])
    const createKakaoButton = () => {
        // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
        //@ts-ignore
        if (window.Kakao) {
            //@ts-ignore
            const kakao = window.Kakao
            // 중복 initialization 방지
            if (!kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                // kakao.init(process.env.REACT_APP_KAKAO_KEY)
                kakao.init("939f8a2265b5e0b152c7b1c08081b9df")
            }
            kakao.Link.createDefaultButton({
                // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: '슬기로운 의사생활 심리테스트',
                    description: '#시즌3 #기원 #슬의심리테스트',
                    imageUrl: "https://friendly-shannon-fbae91.netlify.app/static/media/슬의.194ae169.jpeg?w=380px&h=282px&q=80&fm=png&fit=crop",
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                social: {
                    likeCount: 99,
                    commentCount: 99,
                    sharedCount: 999,
                },
                buttons: [
                    {
                        title: '웹으로 보기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        }
                    },
                ],
            })
        }
    }
    return (
        <>
            <button className="sns-button" id="kakao-link-btn">
                카카오톡 공유하기
            </button>
        </>
    )
}
export default KakaoShareButton
