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
                    title: '타이틀',
                    description: '#리액트 #카카오 #공유버튼',
                    imageUrl: 'https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png', // i.e. process.env.FETCH_URL + '/logo.png'
                    link: {
                        // mobileWebUrl: 'https://friendly-shannon-fbae91.netlify.app/resultpage',
                        // webUrl: 'https://friendly-shannon-fbae91.netlify.app/resultpage',
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
                    },
                },
                social: {
                    likeCount: 77,
                    commentCount: 55,
                    sharedCount: 333,
                },
                buttons: [
                    {
                        title: '웹으로 보기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,
                        }
                    },
                    {
                        title: '앱으로 보기',
                        link: {
                            mobileWebUrl: window.location.href,
                            webUrl: window.location.href,    },
                    },
                ],
            })
        }
    }
    return (
        <>
            <button className="sns-button" id="kakao-link-btn" style={{"border":"none", "outline":"none", "background":"none"}}>
                카카오톡 공유하기
            </button>
        </>
    )
}
export default KakaoShareButton
