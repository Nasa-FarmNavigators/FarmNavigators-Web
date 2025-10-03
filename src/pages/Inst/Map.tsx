import PageBreadcrumb from "../../components/Inst/common/PageBreadCrumb";
import PageMeta from "../../components/Inst/common/PageMeta";
import DemographicCard from "../../components/Inst/ecommerce/DemographicCard";

export default function Map() {
  return (
    <div>
      <PageMeta
        title="Mapa"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Mapa" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="">
          
            <DemographicCard />
        </div>
      </div>
    </div>
  );
}
