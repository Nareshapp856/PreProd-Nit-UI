import React from "react";
import BatchCurriculumTable from "../components/BatchCurriculumTable";

function BatchCurriculum() {
  return (
    <div className="" style={{ padding: "10px" }}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold text-gray-700">
          Batch Curriculums
        </h1>
      </div>
      <hr className="mb-6 border-gray-300" />

      <div>
        <BatchCurriculumTable />
      </div>
    </div>
  );
}

export default BatchCurriculum;