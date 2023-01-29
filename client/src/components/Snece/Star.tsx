import React from "react";
import star1 from "../../assets/Star 1.svg";
import star2 from "../../assets/Star 2.svg";
import star3 from "../../assets/Star 3.svg";
import styled from "styled-components";
import { mediaQueries } from "../../common/mediaQueries";

const Star = () => {
  return (
    <StarImg>
      <ul>
        <li>
          <img src={star1} />
        </li>
        <li>
          <img src={star2} />
        </li>
        <li>
          <img src={star3} />
        </li>
      </ul>
    </StarImg>
  );
};

const StarImg = styled.div`
  width: 40vw;
  position: absolute;
  top: 100px;
  right: -50px;

  ul {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5%;

    li {
      width: 30%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;

export default Star;
