import * as React from "react";
import Slide from "@mui/material/Slide";

import LanguageGenerator from "../lang";
import Generator from "./Generator";
import GraphVisualizer from "./GraphVisualizer";
import GraphTrainer from "./GraphTrainer";
import StartingPage from "./StartingPage";

interface FlowProps {
  graph: LanguageGenerator;
  setGraph(graph: LanguageGenerator): void;
}

export default function Flow({ graph, setGraph }: FlowProps) {
  const [step, setStep] = React.useState(0);

  function goToNextStep(): void {
    setStep(step + 1);
  }

  return (
    <React.Fragment>
      <Slide direction="up" in={step === 0} unmountOnExit>
        <div>
          <StartingPage onStart={goToNextStep} />
        </div>
      </Slide>

      <Slide direction="up" in={step === 1} mountOnEnter unmountOnExit>
        <div>
          <GraphTrainer
            graph={graph}
            onTrain={goToNextStep}
            setGraph={setGraph}
          />
        </div>
      </Slide>

      <Slide direction="up" in={step === 2} mountOnEnter unmountOnExit>
        <div>
          <Generator graph={graph} />
        </div>
      </Slide>
    </React.Fragment>
  );
}
