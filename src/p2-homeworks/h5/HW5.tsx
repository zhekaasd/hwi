import React, {useState} from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './components/Header'
import RoutesComponent from './components/RoutesComponent'
import Sidebar from "./components/Sidebar";


function HW5() {
    let [editMode, setEditMode] = useState<boolean>(false);

    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header editMode={editMode} setEditMode={setEditMode} />
            <div style={{paddingTop: '100px'}}>
                <Sidebar editMode={editMode} />
                <RoutesComponent editMode={editMode} />
            </div>

            </HashRouter>
        </div>
    )
}

export default HW5
