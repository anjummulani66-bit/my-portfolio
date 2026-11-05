import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/skills";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const skills = lazy(()=>import ("./components/skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
    return (
        <>
            <Navbar />

            <Suspense fallback={<h2>Loading section...</h2>}>
                <About />
                <Projects />
                <Skills />
                <Resume />
                <Contact />
            </Suspense>

            <footer>
                <p>© 2026 Anjum Mulla. All Rights Reserved.</p>
            </footer>
        </>
    );
}

export default App;