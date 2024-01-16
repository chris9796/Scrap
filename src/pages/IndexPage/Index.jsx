import UrlInput from "../../common/UrlInput/UrlInput.jsx";
import SectionTitle from "../../common/SectionTitle/SectionTitle.jsx";
import "./Index.css";

function Index() {
    return (
        <>
            <section className="IndexSection">
                <SectionTitle title="Scrap" size="100px" color="white" />
                <UrlInput />
            </section>
        </>
    );
}

export default Index;
