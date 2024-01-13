import React, { useEffect, useContext, useState } from 'react'
import { useObservable } from '../utility/hooks/useObservable';
import logo from './logo.svg';
import { ServiceContext } from '../utility/components/serviceWrapper.component';
import PdfView from './pdf/view/pdfview';
type Props = {}


function Main({}: Props) {
    const { dndInfoService } = useContext(ServiceContext);
    const remoteSheet = "https://media.wizards.com/2016/dnd/downloads/5E_CharacterSheet_Fillable.pdf"
    const localSheet = "./5E_CharacterSheet_Fillable.pdf"
    // const [ spells, setSpells ] = useObservable(dndInfoService.getSpells(), []);
    // const [ classes, setClasses ] = useObservable(dndInfoService.getClasses(), []);
            
  return (
    <div className="App">
          <div>
            <div>
                <PdfView pdfToView={localSheet} />
            </div>
            <div>
                <h1>classes</h1>
                {/* <ul>
                    {
                        classes.map((spell, index) => {
                            return <li key={index}>{spell.name} {spell.hit_die}</li>
                        })
                    }
                </ul> */}
            </div>
          </div>
    </div>
  )
}

export default Main