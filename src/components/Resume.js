function Resume(){
    return(
       <div className="resume">
           {/* TODO: Fix sizing and put resume */}
            <object
            data="http://africau.edu/images/default/sample.pdf" //placeholder
            type="application/pdf" 
            width="100%" 
            height="100%"
            className="pdf-object"
            />
        </div>
    )
}

export default Resume