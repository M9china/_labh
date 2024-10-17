import { OurCollection } from "@/components";
import { Suspense } from "react";

export default function Collection() {
  return (
    <Suspense>
      <OurCollection />
    </Suspense>
  );
}
