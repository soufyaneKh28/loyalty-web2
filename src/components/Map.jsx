import dynamic from "next/dynamic";

const Map = dynamic(() => import("./ContactMap"), {
  ssr: false,
  loading: () => (
    <div className=" w-full h-full flex justify-center items-center">
      <p className=" text-white text-[40px] font-bold">Loading...</p>
    </div>
  ),
});

export default Map;
