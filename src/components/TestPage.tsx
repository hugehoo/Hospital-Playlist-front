import "../style/Testpage.css"
import {useResetRecoilState} from "recoil";
import {QuestionIdx} from "../store/store";
import {useEffect} from "react";
import QuestionArea from "./QuestionArea";
import poster from "../슬의.png";
// import styled from "styled-components";

const TestPage = () => {

    const resetIdx = useResetRecoilState(QuestionIdx)
    useEffect(() => {
        resetIdx()
    }, [resetIdx])

    return (
        <section id="main_contents">
            <div className="wrapper">
                <div className="test-upper">
                    <div className="test-upper-title">
                        내가 율제 병원<br/> 인턴이라면?
                    </div>
                    <img id="test-photo" src={poster} alt="슬의"/>
                </div>

                <QuestionArea/>

            </div>
        </section>);
}

export default TestPage;