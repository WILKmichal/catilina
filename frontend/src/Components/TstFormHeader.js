import React from "react";

function TstFormHeader() {
  return (

    <thead>
      <tr className="grid grid-cols-4">
        <th
          className=" px-5 py-3 border-b-2 border-gray-200 bg-teal-100 text-left text-xs font-semibold text-teal-600 uppercase tracking-wider">
          ID
                                </th>
        <th
          className="px-5 py-3 border-b-2 border-gray-200 bg-teal-100 text-left text-xs font-semibold text-teal-600 uppercase tracking-wider">
          Employé
                                </th>
        <th
          className="px-5 py-3 border-b-2 border-gray-200 bg-teal-100 text-left text-xs font-semibold text-teal-600 uppercase tracking-wider">
          Embauche
                                </th>
                                <th
          className="px-5 py-3 border-b-2 border-gray-200 bg-teal-100 text-left text-xs font-semibold text-teal-600 uppercase tracking-wider">
          More Info...
                                </th>

      </tr>
    </thead>

  )
}

export default TstFormHeader;