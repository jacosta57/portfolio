function TerminalHeader(){
    const circle = {width: 12 + 'px' , height: 12 + 'px'};

    return(
        <>
            <div className="d-flex align-items-center pb-2 border-bottom border-secondary mb-3">
                <div className="bg-danger rounded-circle me-2" style={circle}></div>
                <div className="bg-warning rounded-circle me-2" style={circle}></div>
                <div className="bg-success rounded-circle me-2" style={circle}></div>
                <h1 className="text-secondary ms-2 mb-0 small">portfolio.sh</h1>
            </div>
        </>
    )
}

export default TerminalHeader;