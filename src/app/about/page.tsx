import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ImageSlider from "@/components/About/ImageSlider";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Apollo aimed to stay abreast with the evolution of technology and has been providing cutting edge IT solutions"
      />

      <div className="pb-[120px]">
        <AboutSectionOne
          title="About Our Company"
          paragraph="Founded in 1993, Apollo Solutions has established itself as a premier provider of end-to-end IT solutions and digital transformation services. We specialize in helping businesses navigate the complexities of the digital landscape, leveraging cutting-edge technologies to drive innovation, efficiency, and growth. Through continuous digital research and under the guiding principle of “Customer Success,” Apollo has emerged as a leading unified technology solution provider across the region, with the best of digital business advancements still to come."
          lists={[
            "Excellence in everything",
            "Transparency",
          ]}
          image="/images/about/about-21.png"
        />

        <AboutSectionTwo
          image="/images/about/about-17.jpg"
          features={[
            {
              title: "Message From CEO",
              description: "Apollo has striven to maintain high ethical standards, create products and services that provide value to our customers creating a constructive impact. We are focused on accelerating the execution of our growth strategy while continuing to build on our strengths and core competencies. Through consistent digital experimentation and under the motto of “Customer success”, Apollo has become a leading unified technology solution provider region wide and the best of digital business is yet to come.What has not changed is our commitment to providing exceptional customer service and to living our core values:Excellence in everything Integrity Leadership by example Transparency",
            },
          ]}
        />

        <AboutSectionOne
          title="Vision"
          paragraph="Our vision is to be the leading provider of end-to-end IT solutions, distinguished by our unwavering commitment to excellence, integrity, and innovation. We aim to spearhead the digital transformation journey for businesses globally, establishing new benchmarks in technology adoption and customer success. By fostering a culture of empowerment and initiative, we strive to build lasting relationships with our stakeholders and create a future where potential is transformed into reality.
We are dedicated to ensuring that our relationships with clients enhance business insights, foster innovation, and adapt to tailored requirements. Our commitment to a continuous improvement stream underscores our dedication to delivering sustained value and excellence.
"
          lists={["Trusted Pair of Hands", "Ship & Iterate"]}
          image="/images/about/about-18.jpg"
        />

        <AboutSectionTwo
          image="/images/about/about-19.jpg"
          features={[
            {
              title: "Mission",
              description: "At Apollo Solutions, our mission is to empower businesses with innovative IT solutions that drive digital transformation and sustainable growth. We are committed to creating value through exceptional customer service, ethical practices, and continuous technological advancements. Our goal is to be the trusted partner that organizations rely on to unlock their full potential and achieve their strategic objectives. We strive to diversify Apollo’s portfolio to meet all our customers’ current and future technology needs, addressing the extraordinary demands of a connected world."

            },
          ]}
        />
        <ImageSlider />
      </div>
    </>

  );
};

export default AboutPage;
