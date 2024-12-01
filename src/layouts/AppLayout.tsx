import { ReactNode } from "react";
import NavbarTemplet from "@/components/templates/NavbarTemplet";

type AppLayoutProps = {
  children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <NavbarTemplet />
      <main>
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
