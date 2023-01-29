
import styled from "styled-components";
import { mediaQueries } from "../../common/mediaQueries";

const ShortJob = () => {
  return (
    <ShortJ>
      <h1>* 경력직 신입 *</h1>
      <p>
        5년차 Web Publisher | 3년차 Web Designer
        <br />
        1년차 Front-End Developer
      </p>
    </ShortJ>
  );
};

const ShortJ = styled.div`
  position: absolute;
  bottom: 50px;
  left: 5vw;
 

  h1 {
    color: #fff;
    margin-bottom: 20px;

    ${mediaQueries("mo")`
    font-size: 2rem;
    `};
    ${mediaQueries("tab")`
    font-size: 3rem;
    `};

    ${mediaQueries("pc")`
font-size: 5rem;
    `};
  }

  p {
      color:#fff;
      
    ${mediaQueries("mo")`
    font-size: 1.5rem;
    line-height: 2rem;
    `};

    ${mediaQueries("tab")`
    font-size: 2rem;
    line-height: 2.5rem;
    `};

    ${mediaQueries("pc")`
    font-size: 3rem;
    line-height: 3.5rem;
    `};
  }

 
`;

export default ShortJob;
