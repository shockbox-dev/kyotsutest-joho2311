import Hero from '~/components/organisms/Hero'
import { CVSection } from '~/components/molecules/CVSection'
// import Review from '~/components/organisms/Review'
import Issues from '~/components/organisms/Issues'
import Details from '~/components/organisms/Details'
import School from '~/components/organisms/School'
// import Flow from '~/components/organisms/Flow'
import FAQ from '~/components/organisms/FAQ'
import Footer from '~/components/organisms/Footer'

const HomeTemplate: React.FC = () => {
  return (
    <>
      <Hero />
      <Issues />
      {/* <Review /> */}
      <CVSection />
      <Details />
      <CVSection />
      <School />
      <CVSection />
      {/* <Flow /> */}
      {/* <CVSection /> */}
      <FAQ />
      <Footer />
    </>
  )
}

export default HomeTemplate
