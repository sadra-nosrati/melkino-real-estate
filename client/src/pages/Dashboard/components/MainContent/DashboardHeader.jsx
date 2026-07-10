import { useContext } from "react";

import { AuthContext } from "@/context/AuthContext";

function DashboardHeader() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-start gap-4">
      <div>
        <h1 className="text-2xl mobile-landscape:text-3xl laptop:text-4xl font-light leading-tight text-zinc-200">
          سلام، <span className="text-dark-primary">{user?.fullName} عزیز</span>
        </h1>

        <p className="mt-2 text-sm tablet-portrait:text-base text-dark-text-muted">
          آخرین وضعیت بازار و املاک انتخابی شما آماده است.
        </p>
      </div>
    </div>
  );
}

export default DashboardHeader;
