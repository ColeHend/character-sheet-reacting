import React, { createContext, useMemo } from "react";
import { DndInfoService } from "../../services/dnd-info.service";
type Props = {
    children?: React.ReactNode[];
}
export const ServiceContext = createContext({
    dndInfoService: new DndInfoService(),
});

function ServiceWrapper(props: Props ) {
    const dndInfoService = useMemo(() => new DndInfoService(), []);
    
    return <ServiceContext.Provider value={{
        dndInfoService,
      }}>
        {
            props.children?.map((child, index) => {
                return <React.Fragment key={index}>{child}</React.Fragment>

            })
        }
        </ServiceContext.Provider>
}

export default ServiceWrapper;