import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeText } from "../../lib/mock/codeText";
import { CodeHighLightDracula } from "../../styles/CodeHighLightDracula";

const CodeHighLight = () => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <SyntaxHighlighter language="javascript" style={CodeHighLightDracula}>
      {codeText}
    </SyntaxHighlighter>
  );
};

export default CodeHighLight;
