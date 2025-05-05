const TerminalOutput = ({output}) => {
    if(output == ""){
        return;
    }
    return( <div className="mb-3">{output}</div> )
}

export default TerminalOutput;