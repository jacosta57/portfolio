import React, { useState, useRef, useEffect, JSX } from "react";
import styles from "./Terminal.module.css";
import ASCIIWelcome from "./ASCIIWelcome";
import { Command } from "@/lib/Types";
import { parseCommand, getCommand } from "@/lib/commands";

export default function Terminal(): JSX.Element {
  const [history, setHistory] = useState<Command[]>([]);
  const [command, setCommand] = useState("");

  const terminalContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(
    () =>
      terminalContainerRef.current?.scrollTo(
        0,
        terminalContainerRef.current.scrollHeight,
      ),
    [history],
  );

  const handleCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (command === "") {
      setHistory((prev) => [...prev, { name: command, output: <></> }]);
      setCommand("");
      return;
    }

    const commandTrimmed = command.toLowerCase().trim();

    if (commandTrimmed === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    const { command: cmd, args } = parseCommand(commandTrimmed);
    const commandFunc = getCommand(cmd);

    const output: JSX.Element = commandFunc ? (
      commandFunc(args)
    ) : (
      <p>
        Command not found: {cmd}. Type &apos;help&apos; for available commands.
      </p>
    );

    setHistory((prev) => [...prev, { name: command, output }]);
    setCommand("");
  };

  // Focus input on click
  const input = useRef<HTMLInputElement>(null);
  const handleClick = () => input.current?.focus();

  return (
    <div
      className={"rounded p-4 shadow fs-5 " + styles.terminal}
      onClick={handleClick}
      ref={terminalContainerRef}
      role="application"
      aria-label="Interactive terminal"
    >
      <div className="d-flex align-items-center pb-2 border-bottom border-secondary mb-3">
        <div className={"bg-danger rounded-circle me-2 " + styles.circle}></div>
        <div
          className={"bg-warning rounded-circle me-2 " + styles.circle}
        ></div>
        <div
          className={"bg-success rounded-circle me-2 " + styles.circle}
        ></div>
        <h1 className="text-secondary ms-2 mb-0 small">portfolio.sh</h1>
      </div>

      <ASCIIWelcome />

      {history.map((entry: Command, index) => (
        <div key={index}>
          <div className="d-flex mb-3" style={{ overflowWrap: "break-word" }}>
            <span className="text-danger me-2">$ </span>
            {entry.name}
          </div>
          <div className="mb-3">{entry.output}</div>
        </div>
      ))}
      <form onSubmit={handleCommand} className="d-flex mb-0">
        <span className="text-danger me-2">$</span>
        <input
          ref={input}
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          className="bg-transparent text-light border-0 flex-grow-1 p-0"
          style={{ outline: "none" }}
          autoFocus
        />
      </form>
    </div>
  );
}
