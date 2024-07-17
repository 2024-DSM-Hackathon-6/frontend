import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./page/admin/AllPosts";
import PostManagement from "./page/admin/PostManagement";
import Layout from "./components/Layout";
import Login from "./page/login";
import WriteModify from "./page/writeModify";
import Write from "./page/write";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/all" element={<AllPosts />} />
          <Route path="/management" element={<PostManagement />} />
          <Route path="/writeModify" element={<WriteModify />} />
          <Route path="/write" element={<Write />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
