import React from 'react';
import resume from '../assets/Draghi Resume.pdf'
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


function Resume(){

    return(
       <div className="resume">
           {/* //TODO: host resume on external site (one drive?) and link image of pdf to that site so users can click on the links */}
           <h1>resume.</h1>
            <Document
                file={resume}
                onLoadError={console.error}
                style={{ width: '100vw', height: 'auto'}}
            >
                <Page pageIndex={0}/>
            </Document>
        </div>
    )
}

export default Resume