import styled from "styled-components";
import arrowright from "../../assets/arr_right.svg";
import { mediaQueries } from "../../common/mediaQueries";


const Header = () => {
  return (
    <Head>
      <h1>HI JIIN</h1>

      <a
        href="https://crawling-parrotfish-ec0.notion.site/5ff3c586f3434ec5b8f4003069127a3d"
        target="_blank"
      >
        제 포폴 보러가실래요? <img src={arrowright} />
      </a>

      <p>B-Robotics</p>
    </Head>
  );
};

const Head = styled.header`
  position: absolute;
  width: 90%;
  z-index: 10;
  padding: 0 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries("mo")`
height: 40px;
`};

${mediaQueries("tab")`
height: 50px;
`};

${mediaQueries("pc")`
height: 50px;
`};

  h1 {
    color: #fff;
    font-size: 3rem;

    ${mediaQueries("mo")`
    font-size: 2rem;
`};

${mediaQueries("tab")`
font-size: 3rem;
`};

${mediaQueries("pc")`
font-size: 3rem;
`};

  }

  a {
    color: #000;
    background: #5fbebb;
    padding: 10px 20px;
    border-radius: 0 0 10px 10px;
    font-family: "Hanna", fantasy !important;
    position: absolute;
    top: 0;
    

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mediaQueries("mo")`
    width: 180px;
    font-size: 1.5rem;
    left: 95%;
    transform: translateX(-100%);
`};

${mediaQueries("tab")`
width: 300px;
font-size: 2.5rem;
left: 50%;
    transform: translateX(-50%);
`};

${mediaQueries("pc")`
width: 300px;
font-size: 2.5rem;
left: 50%;
    transform: translateX(-50%);
`};



    img {
      

      ${mediaQueries("mo")`
      width: 15px;
`};

${mediaQueries("tab")`
width: 25px;
`};

${mediaQueries("pc")`
width: 25px;
`};
    }
  }

  p {
    color: #fff;
    font-size: 1.5rem;
${mediaQueries("mo")`
display:none;
`};

${mediaQueries("tab")`
display:block;
`};

${mediaQueries("pc")`
display:block;
`};
  }
`;
export default Header;
