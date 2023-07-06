import Footer from "./Footer";
import Nav from "./Nav";

export default function AppLayout({children}){


    return(
        <div id="main-container">
        {/* <Nav /> */}
        {children}
        <Footer />
        </div>

    )
}