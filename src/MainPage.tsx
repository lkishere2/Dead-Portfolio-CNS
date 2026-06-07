import Header from './components/Header'
import Footer from './components/Footer'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ProgramSection from './components/ProgramSection'
import ConclusionSection from './components/ConclusionSection'

export default function MainPage() {
    return (
        <>
            <Header />
            <main>
                <HomeSection />
                <AboutSection />
                <ProgramSection />
                <ConclusionSection />
            </main>
            <Footer />
        </>
    )
}