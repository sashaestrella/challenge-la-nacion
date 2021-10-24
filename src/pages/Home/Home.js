import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
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

            { articles && 
                <div>
                    <Header data-testid="header" sectionName="INFOGRAFIA" article={articles[0]} />
                    <Main articles={articles} />
                </div>
            }

            <Footer />
        </div>
    );
}

export default Home;