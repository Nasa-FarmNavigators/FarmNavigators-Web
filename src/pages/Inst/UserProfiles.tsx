import PageBreadcrumb from "../../components/Inst/common/PageBreadCrumb";
import UserMetaCard from "../../components/Inst/UserProfile/UserMetaCard";
import UserAddressCard from "../../components/Inst/UserProfile/UserAddressCard";
import PageMeta from "../../components/Inst/common/PageMeta";

export default function InstProfiles() {
  return (
    <>
      <PageMeta
        title="Perfil"
        description="This is React.js Profile Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Perfil" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Perfil
        </h3>
        <div className="space-y-6">
          <UserMetaCard />
          {/* <UserAddressCard /> */}
        </div>
      </div>
    </>
  );
}
