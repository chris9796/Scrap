import "./UrlInput.css";
import Search from "./../../Image&Icon/Icon - Search (60x60).png"

function UrlInput() {
    return (
        <>
            <div className="SearchWrap">
                <input type="text" className="UrlInput" placeholder="Paste Url.." />
                <img src={Search} alt="Search" className="SearchLogo" />
            </div>
        </>
    );
}
export default UrlInput;
