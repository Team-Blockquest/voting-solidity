import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import Chairperson from "./pages/Chairperson";
import Teacher from "./pages/Teacher";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <Layout>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/chairperson" element={<Chairperson />} />
                    <Route path="/teacher" element={<Teacher />} />
                    <Route element={<NotFound />} />
                </Routes>
            </Container>
        </Layout>
    );
};

export default App;