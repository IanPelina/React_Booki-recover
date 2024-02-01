import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Error from "../page/Error/Error";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}