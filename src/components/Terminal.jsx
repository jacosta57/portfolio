import React, { useState, useRef, useEffect } from "react";
import TerminalCommand from "./TerminalCommand";
import TerminalHeader from "./TerminalHeader";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";
import terminalFiles from "json/terminalFiles.json"

const availableFiles = Object.keys(terminalFiles).sort().join('  ');

function Terminal() {
  const helpOutput = (
    <pre>
      {`Welcome to the portfolio terminal! 
Below are some commands to get you started.
help       - display this help section
whoami     - information about me
ls         - list all files
cat {file} - read file
clear      - clear the terminal`}
    </pre>
  );

  const [history, setHistory] = useState([
    { name: "help", output: helpOutput }
  ]);

  const terminalContainerRef = useRef(null);
  const terminalEnd = useRef(null);


  useEffect(() => {
    if (terminalEnd.current && terminalContainerRef.current) {
      const container = terminalContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [history]);

  const handleCommand = (userInput) => {
    const [command, ...args] = userInput.split(" ");
    const cmd = command.toLowerCase();

    let output;

    switch (cmd) {
      case "help":
        output = helpOutput;
        break;
      case "whoami":
        output = <pre>{`Jayson Acosta | Computer & Software Engineer`}</pre>;
        break;
      case "clear":
        setHistory([]);
        return;
      case "ls":
        output = <pre>{`${availableFiles}`}</pre>;
        break;
      case "cat":
        const filename = args[0];

        if (!filename) {
          output = <pre>{`Input a file to read. List all files with ls`}</pre>;
          break;
        }
        if (!terminalFiles[filename]) {
          output = "";
          break;
        }

        if (filename.endsWith('.json')) {
          output = <pre>{JSON.stringify(terminalFiles[filename], null, 2)}</pre>;
          break;
        }

        output = <pre>{`${terminalFiles[filename]}`}</pre>;
        break;

      case "":
        output = "";
        break;
      default:
        output = <pre>{`Command not found: ${command}. Type 'help' for available commands.`}</pre>;
    }

    setHistory(prev => [...prev, { name: userInput, output }]);
  };

  return (
    <div
      id="Terminal"
      ref={terminalContainerRef}
      className="bg-black rounded p-3 p-md-4 shadow fs-5"
      style={{
        minHeight: '350px',
        height: '50vh',
        width: '100%',
        overflowY: 'auto',
        fontFamily: 'monospace',
        scrollbarColor: '#121111 black',
        maxWidth: '100%',
        overflowX: 'hidden'
      }}
    >
      <TerminalHeader />

      {history.map((entry, index) => (
        <div key={index}>
          <TerminalCommand command={entry.name} />
          <TerminalOutput output={entry.output} />
        </div>
      ))}
      <TerminalInput onSubmit={handleCommand} />
      <div ref={terminalEnd} />
    </div>
  );
}

export default Terminal;