import React, { useCallback, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

type Props = {pdfToView: string}
type PDFFile = string | File | null;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const maxWidth = 800;
const resizeObserverOptions = {};
const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
  };

function PdfView({pdfToView}: Props) {
  const [file, setFile] = useState<PDFFile>(pdfToView);
  const [numPages, setNumPages] = useState<number>(3);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [containerWidth, setContainerWidth] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [pdfData, setPdfData] = useState<Uint8Array>();
  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);


  const onDocumentLoadSuccess = ({numPages, getData }: PDFDocumentProxy) => {
        getData().then(setPdfData);
        setNumPages(numPages);
  }
  return (
    <div>
        <div ref={setContainerRef}>
            <Document
                file={file}
                onLoadSuccess={(pdf)=>onDocumentLoadSuccess}
                options={options}
            >
                {
                    Array.from(new Array(numPages), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                        />
                    ))
                }
            </Document>
        </div>
        <p>Page {pageNumber} of {numPages}</p>
    </div>
  )
}

export default PdfView