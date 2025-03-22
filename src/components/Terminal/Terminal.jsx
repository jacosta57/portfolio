import { useState, useRef, useEffect } from "react";
import TerminalCommand from "./TerminalCommand";
import TerminalHeader from "./TerminalHeader";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";

function Terminal(){

    const commands = {
        help: {
            name: "help",
            output: 
                <span> &gt;Welcome to Jayson Acosta's Portfolio! Below are some commands to get you started.
                    <br/>&gt;help     - display this help section
                    <br/>&gt;whoami   - information about me
                    <br/>&gt;ls       - list all files
                    <br/>&gt;cat file - read file
                </span>
            
        },
        whoami: {
            name: "whoami",
            output: <span>&gt; Jayson Acosta | Computer & Software Engineer</span>
        },
        ls: {
            name: "ls",
            output: <span>&gt; projects.json |  skills.json |  welcome.txt</span>
        },
        cat: {
            name: "cat",
            output: <span>&gt;Input a file to read. List all files with ls</span>
        },
        findCommand : function(command){
            switch(command){
                case "help":
                    return this.help;
                case "whoami":
                    return this.whoami;
                case "ls":
                    return this.ls;
                case "cat":
                    return this.cat;
                default:
                    return;

            }
        }
    }

    const [history, setHistory] = useState([ commands.help, commands.ls]);
    const [typingIndex, setTypingIndex] = useState(null);

    const terminalEnd = useRef(null);

    useEffect(() => {
        if (terminalEnd.current) {
          terminalEnd.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [history]);

      const handleCommand = (command) => {
        let commandObject = commands.findCommand(command);

        if (!commandObject){
            commandObject = {
                name: command,
                output: `> Command not found: ${command}. Type 'help' for available commands.`
            }
        }

        setHistory(prev => {
            setTypingIndex(prev.length)
            return [...prev, commandObject]
        });

        setTimeout(() => {
            setTypingIndex(null);
        }, 100);
      }

    return(
        <section className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-black rounded p-4 shadow" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              <TerminalHeader />
                
                {history.map((command, index) => {
                    return (
                    <div key={index}>
                        <TerminalCommand command={command.name} isTyping={index === typingIndex} />
                        <TerminalOutput output={command.output} />
                    </div>
                    );
                })}

                <TerminalInput onSubmit={handleCommand}/>
                <div ref={terminalEnd} />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Terminal;