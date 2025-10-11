import React from "react";
// @ts-ignore
import Terminal from "react-bash";

const commands = {
  help: {
    method: () => "Available commands: help, about, echo",
    options: [],
    description: "Show all commands",
  },
  echo: {
    method: (args: string[]) => args.join(" "),
    options: [],
    description: "Echo input",
  },
  about: {
    method: () => "This is a web terminal simulator using react-bash",
    options: [],
    description: "About this terminal",
  },
};

export  const TerminalSimulator: React.FC = () => (
  <Terminal
    welcomeMessage="Welcome to Web Terminal Simulator!"
    commands={commands}
    showControlBar={false}
  />
);
