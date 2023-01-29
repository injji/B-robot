import Layout from "../../components/Layout/Layout";
import styled from "styled-components";
import "./style.scss";
import Snece1 from "../Snece1";

const Main = () => {
  return (
    <Layout>
      <Snece1 />
    </Layout>
  );
};

const Snece1Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  display: block;
  position: relative;
`;

export default Main;
