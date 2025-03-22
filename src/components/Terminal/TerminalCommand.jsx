const TerminalCommand = ({command}) => {
    return(
        <>
            <div className='d-flex mb-3'>
                <span className="text-danger me-2">$ </span>
                {command}
            </div>
        </>
    )
}

export default TerminalCommand;