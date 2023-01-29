import useMightyMouse from "react-hook-mighty-mouse";
import styled from "styled-components";
import { mediaQueries } from "../../common/mediaQueries";

const Dilly = () => {
  /**
   * 눈동자 움직이는 효과
   */
  const {
    selectedElement: {
      position: { angle: angleLeftEye },
    },
  } = useMightyMouse(true, "left-eye", { x: 20, y: 20 });

  const {
    selectedElement: {
      position: { angle: angleRightEye },
    },
  } = useMightyMouse(true, "right-eye", { x: 20, y: 20 });
  const rotateLeftEye = `rotate(-${angleLeftEye}deg)`;
  const rotateRightEye = `rotate(-${angleRightEye}deg)`;

  return (
    <Snece>
      <div className="face">
        <span
          className="eye"
          id="left-eye"
          style={{ transform: rotateLeftEye }}
        >
          <p></p>
        </span>
        <span
          className="eye"
          id="right-eye"
          style={{ transform: rotateRightEye }}
        >
          <p></p>
        </span>
      </div>
      <em></em>
    </Snece>
  );
};

const Snece = styled.div`
  position: fixed;
  right: 5vw;

  ${mediaQueries("mo")`
width: 200px;
  height: 125px;
  bottom: 50px;
`};

  ${mediaQueries("tab")`
width: 400px;
  height: 250px;
  bottom: 0px;
`};

  ${mediaQueries("pc")`
width: 400px;
  height: 250px;
  bottom: 0px;
`};

  .face {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    animation: eyeBlink 5s linear infinite;

    .eye {
      border-radius: 50%;
      background: #000;
      transition: all 1s ease-out;
      position: relative;

      ${mediaQueries("mo")`
height: 80px;
width: 80px;
border: 10px solid #555;
`};

      ${mediaQueries("tab")`
height: 160px;
width: 160px;
border: 20px solid #555;
`};

      ${mediaQueries("pc")`
height: 160px;
width: 160px;
border: 20px solid #555;
`};

      p {
        background: #555;
        border-radius: 50%;
        position: absolute;

        ${mediaQueries("mo")`
width: 25px;
        height: 25px;
        left: 50px;
        top: 24px;
`};

        ${mediaQueries("tab")`
width: 50px;
        height: 50px;
        left: 100px;
        top: 48px;
`};

        ${mediaQueries("pc")`
width: 50px;
        height: 50px;
        left: 100px;
        top: 48px;
`};
      }
    }
  }
  em {
    border-radius: 100%;

    border-bottom-color: #555;
    position: absolute;

    transform: rotate(180deg);

    animation: eyeBlink2 5s linear infinite;

    ${mediaQueries("mo")`
height: 50px;
    width: 100px;
    border: 10px solid transparent;
    border-bottom-color: #555;
top: 50%;
    right: 50%;
    margin-top: -90px;
    margin-right: -110px;
`};

    ${mediaQueries("tab")`
height: 100px;
    width: 200px;
    border: 20px solid transparent;
    border-bottom-color: #555;
top: 50%;
    right: 50%;
    margin-top: -180px;
    margin-right: -220px;
`};

    ${mediaQueries("pc")`
height: 100px;
    width: 200px;
    border: 20px solid transparent;
    border-bottom-color: #555;
top: 50%;
    right: 50%;
    margin-top: -180px;
    margin-right: -220px;
`};
  }

  @keyframes eyeBlink {
    0%,
    30%,
    36%,
    100% {
      transform: scale(1);
    }
    32%,
    34% {
      transform: scale(1, 0);
    }
  }

  @keyframes eyeBlink2 {
    0%,
    30%,
    36%,
    100% {
      transform: translateY(0) rotate(180deg);
    }
    32%,
    34% {
      transform: translateY(50px) rotate(180deg);
    }
  }
`;

export default Dilly;
