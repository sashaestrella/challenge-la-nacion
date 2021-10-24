import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import SubNavBar from "../../components/NavBar/SubNavBar/SubNavBar";
import { ARTICLES } from "../../dataDummy/articles.js";
import "./Home.scss";

function Home() {
    const [articles, setArticles] = useState();

    useEffect(() => {
        setArticles(ARTICLES);
    }, [articles]);

    return (
        <div data-testid="Home">
            <nav className="navbar"><NavBar /></nav>
            <nav><SubNavBar /></nav>

            <Footer />
        </div>
    );
}

export default Home;