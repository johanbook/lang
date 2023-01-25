import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import LanguageGenerator from "../lang";
import loadLanguage, { Language } from "../languageLoader";

const TEXT_MIN_LENGTH = 20;

interface GraphTrainerProps {
  graph: LanguageGenerator;
  onTrain(): void;
  setGraph(graph: LanguageGenerator): void;
}

export default function GraphTrainer({
  graph,
  onTrain,
  setGraph,
}: GraphTrainerProps): React.ReactElement {
  const [text, setText] = React.useState("");

  function handleSubmit(event: React.SyntheticEvent): void {
    event.preventDefault();

    const updatedGraph = graph.analyzeText(text);
    setGraph(updatedGraph);

    setText("");
    onTrain();
  }

  async function trainOnExternal(
    event: React.SyntheticEvent,
    language: Language
  ): Promise<void> {
    event.preventDefault();
    const loremIpsumText = await loadLanguage(language);

    const updatedGraph = graph.analyzeText(loremIpsumText);
    setGraph(updatedGraph);

    setText("");
    onTrain();
  }

  return (
    <form>
      <Typography
        align="center"
        gutterBottom
        style={{ paddingTop: 20 }}
        variant="h4"
      >
        Train a model
      </Typography>
      <Typography gutterBottom>
        In order to be able to imitate a language, we need a sample of the
        target language. The larger the sample, the better the result. Write the
        text below, it should be at least {TEXT_MIN_LENGTH} characters.
      </Typography>
      <TextField
        fullWidth
        label="Language sample"
        multiline
        onChange={(value) => setText(value.target.value)}
        rows={8}
        value={text}
      />
      <div style={{ display: "flex", paddingTop: "10px" }}>
        <span style={{ flexGrow: 1 }} />

        <Button
          onClick={(event) => trainOnExternal(event, "latin")}
          variant="text"
        >
          Latin
        </Button>

        <Button
          onClick={(event) => trainOnExternal(event, "spanish")}
          variant="text"
        >
          Spanish
        </Button>

        <Button
          onClick={(event) => trainOnExternal(event, "swedish")}
          variant="text"
        >
          Swedish
        </Button>

        <Button
          disabled={text.length < TEXT_MIN_LENGTH}
          onClick={handleSubmit}
          type="submit"
          variant="contained"
        >
          Train
        </Button>
      </div>
    </form>
  );
}
