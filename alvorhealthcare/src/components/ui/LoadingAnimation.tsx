import Image from "next/image";
import { publicAssetPath } from "@/lib/paths";

export function PageLoader() {
  return (
    <div
      className="page-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="page-loader__visual" aria-hidden="true">
        <span className="page-loader__orbit page-loader__orbit--outer">
          <span className="page-loader__particle" />
        </span>
        <span className="page-loader__orbit page-loader__orbit--inner">
          <span className="page-loader__particle page-loader__particle--accent" />
        </span>

        <span className="page-loader__brand">
          <Image
            src={publicAssetPath("/images/alvor.svg")}
            alt=""
            fill
            priority
            className="page-loader__logo"
            sizes="72px"
          />
        </span>
      </div>

      <div className="page-loader__copy">
        <p className="page-loader__name">Alvor Healthcare</p>
        <p className="page-loader__message">Preparing your healthcare experience</p>
      </div>

      <div className="page-loader__track" aria-hidden="true">
        <span className="page-loader__progress" />
      </div>
      <span className="sr-only">Loading page...</span>
    </div>
  );
}
