import * as React from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import LanguageGenerator from "../lang";

interface GeneratorProps {
  graph: LanguageGenerator;
}

export default function Generator({
  graph,
}: GeneratorProps): React.ReactElement {
  const [text, setText] = React.useState(graph.generateText(10));

  function handleSubmit(event: React.SyntheticEvent): void {
    event.preventDefault();

    const text = graph.generateText(10);
    setText(text);
  }

  return (
    <form>
      <Typography
        align="center"
        gutterBottom
        style={{ paddingTop: 20 }}
        variant="h4"
      >
        Generate language samples
      </Typography>
      <Typography gutterBottom>
        Now when we have completed training our model, we are ready to generate
        a language sample.
      </Typography>

      <Paper style={{ padding: 20 }} variant="outlined">
        <Typography>{text}</Typography>
      </Paper>

      <div style={{ display: "flex", paddingTop: "10px" }}>
        <span style={{ flexGrow: 1 }} />
        <Button onClick={handleSubmit} type="submit" variant="contained">
          Generate new
        </Button>
      </div>
    </form>
  );
}
