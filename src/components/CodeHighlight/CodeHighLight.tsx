import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeText } from "../../lib/mock/codeText";
import { CodeHighLightDracula } from "../../styles/CodeHighLightDracula";
import styled from "styled-components";

const CodeHighLight = () => {
  return (
    <ContainerSC>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore*/}
      <SyntaxHighlighter language="javascript" style={CodeHighLightDracula}>
        {codeText}
      </SyntaxHighlighter>
    </ContainerSC>
  );
};

const ContainerSC = styled.div`
  transform: rotateY(180deg);
  backface-visibility: hidden;
  position: absolute;
`;

export default CodeHighLight;
