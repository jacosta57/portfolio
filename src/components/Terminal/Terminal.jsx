import React, { useState, useRef, useEffect } from "react";
import TerminalCommand from "./TerminalCommand";
import TerminalHeader from "./TerminalHeader";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";
import terminalFiles from "../../assets/terminalFiles.json"

const availableFiles = Object.keys(terminalFiles).sort().join('  ');

function Terminal() {
  const helpOutput = (
    <pre>
{`Welcome to Jayson Acosta's Portfolio! Below are some commands to get you started.
help     - display this help section
whoami   - information about me
ls       - list all files
cat {file} - read file
clear    - clear the terminal`}
    </pre>
  );

  const [history, setHistory] = useState([
    { name: "help", output: helpOutput }
  ]);
  
  const terminalEnd = useRef(null);

  useEffect(() => {
    if (terminalEnd.current) {
      terminalEnd.current.scrollIntoView({ behavior: 'smooth' });
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
        if(!terminalFiles[filename]){ 
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
    <section className="position-relative min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 mb-4 mb-lg-0">
            <div 
              className="bg-black rounded p-4 shadow fs-5" 
              style={{ height: '50vh', width: '80vh', overflowY: 'auto', fontFamily: 'monospace', scrollbarColor: '#121111 black'}}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terminal;