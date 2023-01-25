import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface StartingPageProps {
  onStart(): void;
}

export default function StartingPage({ onStart }: StartingPageProps) {
  return (
    <React.Fragment>
      <Typography
        align="center"
        gutterBottom
        style={{ paddingTop: 20 }}
        variant="h4"
      >
        Language generator
      </Typography>
      <Typography align="center" gutterBottom>
        This is a tool for imitating languages. It is meant for authors who
        design their own fantasy languages.
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={onStart} variant="contained">
          Start
        </Button>
      </div>
    </React.Fragment>
  );
}
