import type React from "react"

interface SpecificationTableProps {
  specifications?: Record<string, string>
}

const SpecificationTable: React.FC<SpecificationTableProps> = ({ specifications }) => {
  // Default specifications if none provided
  const defaultSpecs = {
    "Standard Size": "8' x 4' (2440mm x 1220mm)",
    "Available Thickness": "4mm to 25mm",
    "Core Material": "Hardwood",
    "Glue Used": "Phenol Formaldehyde",
    "Moisture Content": "6-12%",
    Density: "550-650 kg/m³",
    "Formaldehyde Emission": "E1 Grade",
    "Standards Compliance": "IS 303, IS 848",
  }

  const specs = specifications || defaultSpecs

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-amber-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b">Specification</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 border-b">Details</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(specs).map(([key, value], index) => (
                <tr key={key} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700 border-b">{key}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 border-b">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SpecificationTable
