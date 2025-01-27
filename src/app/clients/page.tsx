import Breadcrumb from "@/components/Common/Breadcrumb";
import Clients from "@/components/Clients";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients | Your Company Name",
  description: "Discover the organizations that trust our solutions. Join 50+ of satisfied customers using our solutions globally.",
  // You can add more metadata properties as needed
};

const ClientPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Clients"
        description="Join 50+ of satisfied customers using our solutions globally."
      />
      <div className="pb-[120px]">
        <Clients />
      </div>
    </>
  );
};

export default ClientPage;