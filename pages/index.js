import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import ComoFuncionaPrincipal from '../components/ComoFuncionaPrincipal';
import QuienesSomosPrincipal from '../components/QuienesSomosPrincipal';
import NuestrosAliadosPrincipal from '../components/NuestrosAliadosPrincipal';
import CourseOne from "../components/CourseOne";
import VideoTwo from "../components/VideoTwo";
import CountdownKipso from "../components/CountdownKipso";
import CourseCatOne from "../components/CourseCatOne";
import CallToActionThree from "../components/CallToActionThree";
import BrandsTwo from "../components/BrandsTwo";
import BlogTwo from "../components/BlogTwo";
import CallToActionFour from "../components/CallToActionFour";
import SubscribeOne from "../components/SubscribeOne";




const HomePage = () => (


    <Layout pageTitle="Santa Cruz Educa">
      <Topbar />
      <NavOne />
      <SliderOne />
      {/* <CountdownKipso /> */}
      <ComoFuncionaPrincipal />
      <QuienesSomosPrincipal />
      <NuestrosAliadosPrincipal />
      {/* <CourseOne /> */}
      {/* <VideoTwo /> */}
      {/* <CountdownKipso /> */}
      {/* <CourseCatOne /> */}
      {/* <CallToActionThree /> */}
      {/* <BrandsTwo /> */}
      {/* <BlogTwo /> */}
      <CallToActionFour />
      {/* <SubscribeOne /> */}
      <Footer />
    </Layout>
 
)

export default HomePage;