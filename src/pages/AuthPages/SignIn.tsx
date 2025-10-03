import PageMeta from "../../components/Admin/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Entrar"
        description="SignIn"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
