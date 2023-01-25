import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";

import LanguageGenerator from "../lang";

interface GraphVisualizerProps {
  graph: LanguageGenerator;
}

export default function GraphVisualizer({
  graph,
}: GraphVisualizerProps): React.ReactElement {
  const num = graph.getNumChars();
  return (
    <React.Fragment>
      <LinearProgress value={num} variant="determinate" />
    </React.Fragment>
  );
}
