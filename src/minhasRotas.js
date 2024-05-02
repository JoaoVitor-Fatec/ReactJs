import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./Home";
import Atv1 from "./Atv1";
import Atv2 from "./Atv2";


export default function minhasRotas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atv1" element={<Atv1 />} />
            <Route path="/atv2" element={<Atv2 />} />
        </Routes>
        </BrowserRouter>
    );
}

