
import About from "../../components/About";
import Banner from "../../components/Banner";
import Community from "../../components/Community";
import Footer from "../../components/Footer";
import FormPedro from "../../components/FormPedro";
import Informations from "../../components/Informations";
import Navbar from "../../components/Navbar";
import Partners from "../../components/Partners";
import Work from "../../components/Work";


export default function Home() {
    return (
        <>
            <Navbar />
            <Banner />
            <Informations />
            <Work />
            <About />
            <Community />
            <FormPedro />
            <Partners />
            <Footer />
        </>

    )
}
