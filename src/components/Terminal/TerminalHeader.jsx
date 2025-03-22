function TerminalHeader(){
    const circle = {width: 12 + 'px' , height: 12 + 'px'};

    return(
        <>
            <div className="d-flex align-items-center border-bottom border-secondary pb-2 mb-3">
                <div className="bg-danger rounded-circle me-2" style={circle}></div>
                <div className="bg-warning rounded-circle me-2" style={circle}></div>
                <div className="bg-success rounded-circle me-2" style={circle}></div>
                <h1 className="text-secondary ms-2 mb-0 small align-bottom">portfolio.sh</h1>
            </div>
        </>
    )
}

export default TerminalHeader;