import { EmblaCarousel2 } from "@/components/ui/EmblaCarousel2";
import Image from "next/image";
import dataAr from "@/app/content-ar";
const OPTIONS = { direction: "rtl" };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const page = ({ params }) => {
  return (
    <div className=" py-[200px]">
      this is the details of project{params.projectId}x{" "}
      <EmblaCarousel2>
        {dataAr.projects[params.projectId - 1].details.images
          ? dataAr.projects[params.projectId - 1].details.images.map(
              (project, i) => (
                <div className=" mx-2 ms-[15px]  md:ms-[50px] " key={i}>
                  <div className="transition-colors  w-[350px] h-[250px] md:h-[535px] md:w-[800px] rounded-[10px] overflow-hidden">
                    <Image
                      src={project.img}
                      alt="img"
                      className="w-[100%] h-[100%] object-cover"
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                </div>
              )
            )
          : null}
        {}

        <div className=" mx-2 ms-[15px]  md:ms-[50px] ">
          <div className="transition-colors  w-[350px] h-[250px] md:h-[535px] md:w-[800px] rounded-[10px] overflow-hidden">
            <video
              width="100%"
              height="100%"
              controls
              loop
              preload="true"
              autoPlay="true"
              src=" https://cdn.dribbble.com/userupload/2999497/file/large-438276ad83c25e3db171ff740589081e.mp4"
            >
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* <div className=" mx-2">
              <div className="transition-colors w-[350px] h-[250px] md:h-[535px] md:w-[800px] rounded-[10px] overflow-hidden">
                <Image
                  src={projectObj.img}
                  alt="img"
                  className="w-[100%] h-[100%] object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
            <div className=" mx-2">
              <div className="transition-colors w-[350px] h-[250px] md:h-[535px] md:w-[800px] rounded-[10px] overflow-hidden">
                <Image
                  src={projectObj.img}
                  alt="img"
                  className="w-[100%] h-[100%] object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>

              https://cdn.dribbble.com/userupload/2999497/file/large-438276ad83c25e3db171ff740589081e.mp4
            </div> */}
      </EmblaCarousel2>
    </div>
  );
};

export default page;
