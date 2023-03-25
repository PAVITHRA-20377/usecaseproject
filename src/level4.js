import First from './level1.js'
import Third from './level3.js'
import Second from './level2.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function Final(){
    return(
        <div>
           <Router>
            <Routes>
                <Route path="/" element={<First/>}/>
                <Route path="/level3" element={<Third/>}/>
                <Route path="/level2" element={<Second/>}/>
            </Routes>
           </Router>
        </div>
    )
}
export default Final;