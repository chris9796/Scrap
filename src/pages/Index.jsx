import UrlInput from "../components/UrlInput.jsx";
import "../components_css/Page.css"
import NavBar from "../components/NavBar.jsx"
import SectionTitle from "../components/SectionTitle.jsx";
import "../components_css/IndexPage.css"


function Index(){

return(

    <>
        <div className="Page">

        <NavBar/>
        <section>
        <SectionTitle title="Scrap" size="100px"/>
            <form action="">
                
                <br></br>
                <UrlInput/>
            </form>
         </section>
       
         </div>
</>
      );
   
}

export default Index;