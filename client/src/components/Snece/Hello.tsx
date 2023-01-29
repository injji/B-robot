import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Hello = () => {
  const txt = "웹에이전시, 스타트업, 중소기업의 거친 환경 속에서도 잘 적응하며 성장합니다.";
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);
//   const [Color, setColor] = useState("#fff");
  const [Finish, setFinish] = useState(false);

//   const handleAfterAction = () => {
//     setColor("#5FBEBB");
//     setFinish(true);
//   };

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
      setCount(Count + 1); // 개수 만큼 체크
    }, 100);

    if (Count === txt.length) {
      // Count를 따로 두지 않고 Text.length 체크도 가능
      clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
    }

    // if (Text.length === txt.length) {
    //   clearInterval(interval);
    //   handleAfterAction(); // 글자가 모두 출력된 후 handleAfterAction 함수를 호출합니다.
    // }

    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  });

  return (
    <div className="Hello">
      <p className={` ${Finish && "text"}`} >
        {Text}
      </p>
    </div>
  );
};

const Typing = styled.div`
height: 30px;
`

export default Hello;
