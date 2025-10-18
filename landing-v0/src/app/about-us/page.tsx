import MemberInfo from "./components/memberinfo";
import TextMore from "./components/textmore";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="pb-10">
        <p className="text-center text-4xl font-bold pb-10">در باره ما</p>
        <TextMore />
        <MemberInfo />
      </div>
    </div>
  );
};

export default AboutUs;
