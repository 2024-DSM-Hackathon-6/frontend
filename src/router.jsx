import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>sadas</>}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
