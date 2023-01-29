import React from "react";
import { mediaQueries } from "../../common/mediaQueries";
import styled from "styled-components";
import Hello from './Hello';

const FrontEnd = () => {
  return (
    <Front>
      <h1>
        FRONT-END
        <br />
        DEVELOPER
      </h1>

      <Hello />

      <div className="skill">
        <ul className="green">
          <li>ReactJS</li>
          <li>Typescript</li>
          <li>Javascript</li>
          <li>SCSS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Jquery</li>
          <li>Laravel</li>
        </ul>

        <ul className="yellow">
          <li>Jira Confluence</li>
          <li>Slack</li>
          <li>Jandi</li>
          <li>Github</li>
          <li>Gitlab</li>
          <li>Figma</li>
          <li>AWS</li>
        </ul>

        <ul className="pink">
          <li>Vscode</li>
          <li>Photoshop</li>
          <li>GNUboard</li>
          <li>Cafe24</li>
          <li>Godomall</li>
          <li>Makeup</li>
        </ul>
      </div>
    </Front>
  );
};

const Front = styled.div`
  width: 90vw;
  margin-left: 5vw;
  position: absolute;

  h1 {
    color: #fff;
    text-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  p {
    color: #fff;
  }

  .skill {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin-top: 20px;

    ul {
      

      &.green li {
        background-color: #5fbebb;
        color: #fff;
      }

      &.yellow li {
        background-color: #f3ffa9;
        color: #000;
      }

      &.pink li {
        background-color: #555;
        color: #fff;
      }

      li {
        width: max-content;
        padding: 5px 10px;
        border-radius: 5px;
        display: inline-block;
        margin-right: 5px;
        margin-bottom: 5px;
      }
    }
  }
  ${mediaQueries("mo")`
  h1{
     font-size: 7rem;
     margin-top: 120px; 
  }
  p{
      font-size: 1.8rem;
      margin-top: 20px
    }
    li{
        font-size: 1.5rem;
    }
  `};
  ${mediaQueries("tab")`
  h1{
     font-size: 12rem; 
     margin-top: 100px;
  }
  p{
      font-size: 2rem;
      margin-top: 30px
    }
    li{
        font-size: 1.5rem;
    }
  `};

  ${mediaQueries("pc")`
  h1{
     font-size: 12rem; 
     margin-top: 100px;
  }
  p{
      font-size: 3rem;
margin-top:30px;
}
li{
    font-size: 2rem;
}
  `};
`;

export default FrontEnd;
