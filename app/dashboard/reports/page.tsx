'use client';

import { useState } from "react";
import DashboardLayout from "@/components/dashboard-layout";

const initialReports = [
  { id: 1, name: "Sales Performance", type: "Chart", lastGenerated: "2024-01-18" },
  { id: 2, name: "Lead Conversion", type: "Table", lastGenerated: "2024-01-17" },
  { id: 3, name: "Revenue Forecast", type: "Chart", lastGenerated: "2024-01-16" },
  { id: 4, name: "Customer Activity", type: "Table", lastGenerated: "2024-01-15" },
  { id: 5, name: "Team Performance", type: "Chart", lastGenerated: "2024-01-14" },
];

export default function ReportsPage() {
  const [reports, setReports] = useState(initialReports);
  const [showModal, setShowModal] = useState(false);
  const [newReport, setNewReport] = useState({ name: "", type: "Chart" });

  const handleCreateReport = () => {
    if (newReport.name) {
      setReports([...reports, { ...newReport, id: reports.length + 1, lastGenerated: new Date().toISOString().split('T')[0] }]);
      setNewReport({ name: "", type: "Chart" });
      setShowModal(false);
    }
  };

  return (
    <DashboardLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Reports</h1>
          <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <span className="mr-1">+</span> Create Report
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div key={report.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{report.type === "Chart" ? "📊" : "📋"}</span>
                <span className="text-xs text-gray-500">{report.lastGenerated}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{report.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{report.type} Report</p>
              <button className="text-sm text-blue-600 hover:text-blue-500">View Report →</button>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Create New Report</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Report Name"
                  value={newReport.name}
                  onChange={(e) => setNewReport({ ...newReport, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700"
                />
                <select
                  value={newReport.type}
                  onChange={(e) => setNewReport({ ...newReport, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700"
                >
                  <option>Chart</option>
                  <option>Table</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400">Cancel</button>
                <button onClick={handleCreateReport} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Create Report</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}