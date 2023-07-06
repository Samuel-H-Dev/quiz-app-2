import Footer from "./Footer";
import Nav from "./Nav";

export default function AppLayout({children}){


    return(
        <>
        <Nav />
        {children}
        <Footer />
        </>

    )
}