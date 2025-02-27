"use client";
import * as React from "react";
import { usePageLeave } from "react-use";

export default function App() {
  const [distractions, setDistractions] = React.useState(0);

  usePageLeave(() => setDistractions((prev) => prev + 1));

  return (
    <section>
      <h1>usePageLeave</h1>
      <p>(Mouse out of the page)</p>
      <h3>
        You've been distracted {distractions}{" "}
        {distractions === 1 ? "time" : "times"}.
      </h3>
    </section>
  );
}
