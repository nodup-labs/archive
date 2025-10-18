import Collaboration from "./components/collaboration";
import Herosection from "./components/herosection";
import News from "./components/news";
import ProjectSlider from "./components/projectSlider";
import Serveses from "./components/serveses";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <Herosection />
      <Serveses />
      <Collaboration />
      <ProjectSlider />
      <Testimonial />
      <News />
    </div>
  );
}
