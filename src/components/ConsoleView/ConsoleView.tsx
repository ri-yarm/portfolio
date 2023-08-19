import { useEffect } from "react";
import { consoleText } from "../../lib/mock/consoleText";

const ConsoleView = () => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(consoleText.text);
  }, []);

  return <></>;
};

export default ConsoleView;
