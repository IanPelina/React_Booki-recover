import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Error from "../page/Error/Error";
import DisplayCard from "../components/DisplayedCard/DisplayCard";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/accomodations/:id" element={<DisplayCard />} />
        </Routes>
    )
}