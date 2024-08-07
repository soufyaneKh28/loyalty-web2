import React from "react";

const page = ({ params }) => {
  console.log("hello");
  return (
    <div className=" py-[200px]">
      this is the details of project{params.projectId}
    </div>
  );
};

export default page;
