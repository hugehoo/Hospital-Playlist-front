import React from 'react'
import styled from 'styled-components'

const Bar = (props:any) => {
    return (
        <BarWrapper onClick={props.handleClickBar} isSelected={props.isSelected}>
            <BarGraph width={props.percent} isSelected={props.isSelected}></BarGraph>
        </BarWrapper>
    )
}

const BarWrapper = styled.div<StyledCardProps>`
  position: relative;
  margin-bottom: 3px;
  padding: 8px 0;
  background: ${({isSelected}) => isSelected ? '#ffffff' : '#f3f3f3'};
`
// learned
interface StyledCardProps {
    width?: number
    isSelected?: any
}
const BarGraph = styled.div<StyledCardProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  transform: scaleX(${({width}) => width}%);
  transform-origin: left;
  transition: transform 1.5s ease;
  //원래는 width에 화살표함수를 넣어, width 값 자체를 변경시켰는데, 리팩토링에선 transformX 라는 GPU가 관여하는 속성을 사용하여 reflow 과정을 스킵했다.
  // GPU 가 도와주다 보니, 메인 스레드가 하는 일이 거의 없어진다 <= reflow 할 필요가 없기때문.
  // 근데 애초에 이걸 누가 width 속성으로 바로 변경하려하지..? 보통 transform 사용하지 않을까?
  height: 100%;
  background: ${({isSelected}) => isSelected ? '#4da7ee' : 'rgb(255,255,255)'};
  z-index: 1;
`
// #419adf

export default Bar
