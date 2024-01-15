import UrlInput from "../../common/UrlInput/UrlInput.jsx";
import SectionTitle from "../../common/SectionTitle/SectionTitle.jsx";
import { Outlet } from "react-router-dom";

function Index() {
    return (
        <div className="Page">
              <Outlet />
            <section className="IndexSection">
                <SectionTitle title="Scrap" size="100px" color="white" />
                <UrlInput />
                hi
            </section>
          
        </div>
    );
}

export default Index;
