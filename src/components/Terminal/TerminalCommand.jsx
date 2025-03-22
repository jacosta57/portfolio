const TerminalCommand = ({command}) => {
    return(
        <>
            <div className='d-flex mb-2'>
                <span className="text-danger me-2">$ </span>
                {command}
            </div>
        </>
    )
}

export default TerminalCommand;