import React, { useState, useRef, useEffect, JSX, useMemo } from "react";
import terminalFiles from "@/data/terminalFiles.json";
import styles from "./Terminal.module.css";
import ASCIIWelcome from "./ASCIIWelcome";
import { Command, Files } from "@/lib/Types";

type CommandFunction = (args: string[]) => JSX.Element;
type CommandMap = {
  [key: string]: CommandFunction;
};

export default function Terminal(): JSX.Element {
  const availableFiles = useMemo(
    () => Object.keys(terminalFiles).sort().join("  "),
    [],
  );
  const [history, setHistory] = useState<Command[]>([]);
  const [command, setCommand] = useState("");

  const terminalContainerRef = useRef<HTMLDivElement>(null);

  // On overflow, jump to the end of the scrollbar.
  useEffect(() => {
    if (terminalContainerRef.current) {
      const container = terminalContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [history]);

  const commandHelper: CommandMap = {
    help: () => (
      <div className={styles.terminalOutput}>
        <p>help - display this help section</p>
        <p>whoami - information about me</p>
        <p>ls - list all files</p>
        <p>cat &#123;file&#125; - read file</p>
        <p>clear - clear the terminal</p>
      </div>
    ),

    whoami: () => <p>Jayson Acosta | Computer & Software Engineer</p>,

    ls: () => <p>{availableFiles}</p>,

    cat: (args: string[]) => {
      if (args.length === 0) {
        return <pre>cat: missing file operand</pre>;
      }

      const files = terminalFiles as Files;

      const outputs = args.map((filename, index) => {
        // Handle each file individually
        if (!files[filename]) {
          return (
            <div key={index}>
              <pre>cat: {filename}: No such file or directory</pre>
            </div>
          );
        }

        let content;
        if (filename.endsWith(".json")) {
          content = <pre>{JSON.stringify(files[filename], null, 2)}</pre>;
        } else {
          content = <p>{String(files[filename])}</p>;
        }

        return (
          <div key={index}>
            {args.length > 1 && (
              <div className="small mb-1">==&gt; {filename} &lt;==</div>
            )}
            {content}
            {index < args.length - 1 && <br />}
          </div>
        );
      });

      return <div>{outputs}</div>;
    },
  };

  const handleCommand = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [commandName, ...args] = command.split(" ");
    const cmd = commandName.toLowerCase();

    if (cmd === "clear") {
      setHistory([]);
      setCommand("");
      return;
    }

    if (cmd === "") {
      setHistory((prev) => [...prev, { name: command, output: <></> }]);
      setCommand("");
      return;
    }

    const commandFn =
      commandHelper[cmd] ||
      (() => (
        <pre>
          Command not found: {commandName}. Type &apos;help&apos; for available
          commands.
        </pre>
      ));

    const output = commandFn(args);
    setHistory((prev) => [...prev, { name: command, output }]);
    setCommand("");
  };

  // Any click on the terminal will focus onto the input box
  const input = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (input.current) {
      input.current.focus();
    }
  };

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
