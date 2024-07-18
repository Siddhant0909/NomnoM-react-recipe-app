import React from "react";
import BottomNav from "../components/BottomNav";
import Banner from "../components/Banner";
import Popular from "../components/Popular";
import MobileNav from "../components/MobileNav";

const Home = () => {
  return (
    <>
      <MobileNav />
      <div className="flex flex-col justify-between gap-4 px-4 mt-20 h-fit">
        <Banner />
        <Popular />
      </div>
      <BottomNav />
    </>
  );
};

export default Home;
