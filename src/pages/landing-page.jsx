import HeroGeometric from "../components/mvpblocks/geometric-hero"
import Header from "../components/mvpblocks/header"
import About from "../components/mvpblocks/about"
import Feature from "../components/mvpblocks/feature"
import FooterGlow from "../components/mvpblocks/footer-glow"

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroGeometric />
      <About />
      <Feature />
      <FooterGlow />
    </>
  )
}

export default LandingPage