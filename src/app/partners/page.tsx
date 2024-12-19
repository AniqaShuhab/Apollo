import Partners from "@/components/Partners";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners | Your Company Name",
  description: "Discover our technology partners and strategic alliances that help us deliver cutting-edge solutions.",
};

const PartnersPage = () => {
  return (
    <div className="pb-0">
      <Breadcrumb
        pageName="Our Partners"
        description="Strategic technology partnerships powering our solutions"
      />
      <Partners />
    </div>
  );
};

export default PartnersPage;