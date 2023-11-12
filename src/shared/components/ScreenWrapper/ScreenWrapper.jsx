import React, { Suspense } from "react";
import { Header } from "Components/Header";
import { Footer } from "Components/Footer";
import { Loader } from "Components/Loader";

export const ScreenWrapper = ({ children }) => {
  return (
    <div className={`bg-zinc-800 w-full overflow-hidden`}>
      <div className={`min-h-screen flex flex-col w-full max-w-full`}>
        <Header />
        <div className="grow">
          <Suspense
            fallback={
              <div
                className={`flex h-screen w-full items-center justify-center`}
              >
                <Loader size={100} color="#A259FF" />
              </div>
            }
          >
            {children}
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
};
