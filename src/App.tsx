import * as React from "react";
import Container from "@mui/material/Container";

import Flow from "./components/Flow";
import LanguageGenerator from "./lang";

export default function App() {
  const [graph, setGraph] = React.useState(() => new LanguageGenerator());

  return (
    <Container>
      <Flow graph={graph} setGraph={setGraph} />
    </Container>
  );
}
