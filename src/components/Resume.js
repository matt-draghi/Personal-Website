import React from 'react';
import FadeIn from "react-fade-in/lib/FadeIn"
import resume from '../assets/Draghi Resume.pdf'
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


function Resume(){

    return(
       <div className="resume">
           <FadeIn>
           {/* //TODO: host resume on external site (one drive?) and link image of pdf to that site so users can click on the links */}
           <h1>resume.</h1>
           <h3>(Please scroll for the links from the resume below)</h3>
            <div className='document'>
                <Document
                    file={resume}
                    onLoadError={console.error}
                    style={{ width: '100vw', height: 'auto'}}
                >
                    <Page pageIndex={0}/>
                </Document>
            </div>
            <div className='resume-links'>
                <p><a href="https://github.com/matt-draghi" target="_blank">GitHub</a></p>
                <div></div>
                <p><a href="https://medium.com/@mtd5264" target="_blank">Medium</a></p>
                <div></div>
                <p><a href="https://matthew-draghi.com/" target="_blank">matthew-draghi.com</a></p>
                <div></div>
                <p><a href="https://github.com/matt-draghi/Phase-1-Project" target="_blank">B33R GitHub</a></p>
                <div></div>
                <p><a href="https://github.com/matt-draghi/phase-2-project" target="_blank">Baby Brands GitHub</a></p>
            </div>
            </FadeIn>
        </div>
    )
}

export default Resume