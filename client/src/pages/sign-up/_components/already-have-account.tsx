import { PageSwitcher } from "@/components/page-switcher";
import { useAuthStore } from "@/lib/stores/auth-store";
import { AppRoutes } from "@/constants/routes";

const AlreadyHaveAccount = () => {
  const { loading } = useAuthStore();

  return (
    <PageSwitcher
      label="Already have an account?"
      tag="Sign In"
      href={AppRoutes.SignIn}
      disabled={loading}
    />
  );
};

export { AlreadyHaveAccount };
