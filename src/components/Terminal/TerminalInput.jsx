import React, { useState, useRef, useEffect } from 'react';

const TerminalInput = ({ onSubmit }) => {
  const [command, setCommand] = useState('');
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
    
    const handleClick = () => {
      input.current.focus();
    };
    
    document.getElementById("Terminal").addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(command);
    setCommand('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-0">
      <span className="text-danger me-2">$</span>
      <input
        ref={input}
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        className="bg-transparent text-light border-0 flex-grow-1 p-0"
        style={{ outline: 'none' }}
        autoFocus
      />
    </form>
  );
};

export default TerminalInput;