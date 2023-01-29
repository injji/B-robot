import styled from "styled-components";
import Dilly from "../components/Snece/Dilly";
import FrontEnd from "../components/Snece/FrontEnd";
import ShortJob from "../components/Snece/ShortJob";
import Star from '../components/Snece/Star';

const Snece1 = () => {
  return (
    <Snece1Wrap>
      <Dilly />
      <Star />
      <FrontEnd />
      <ShortJob />
    </Snece1Wrap>
  );
};

const Snece1Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: block;
  position: relative;
`;

export default Snece1;
