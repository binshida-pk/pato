import type { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Mainbody({ children }: PropsWithChildren) {
  return (
    <div className="grid h-screen w-screen grid-cols-1 grid-rows-[auto_1fr_auto] lg:grid-cols-[auto_1fr] lg:overflow-hidden">
      <Navbar />
      <div className="flex flex-col lg:h-content">{children}</div>
      <div className="col-span-2 hidden h-footer items-center justify-end border-t border-default-border px-sm text-[0.7rem] leading-none text-dimmed lg:flex">
        <Footer />
      </div>
    </div>
  );
}
