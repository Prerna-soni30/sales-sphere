'use client';

import { useState } from "react";
import DashboardLayout from "@/components/dashboard-layout";

const initialLeads = [
  { id: 1, name: "John Smith", email: "john@example.com", company: "Acme Inc", status: "New", value: "$5,000", created: "2024-01-15" },
  { id: 2, name: "Sarah Johnson", email: "sarah@company.com", company: "Tech Solutions", status: "Contacted", value: "$8,500", created: "2024-01-14" },
  { id: 3, name: "Mike Wilson", email: "mike@tech.io", company: "Digital Corp", status: "Qualified", value: "$12,000", created: "2024-01-13" },
  { id: 4, name: "Emma Davis", email: "emma@startup.co", company: "Startup Inc", status: "Proposal", value: "$6,200", created: "2024-01-12" },
  { id: 5, name: "Alex Chen", email: "alex@dev.com", company: "Code Labs", status: "New", value: "$4,000", created: "2024-01-11" },
  { id: 6, name: "Lisa Brown", email: "lisa@marketing.io", company: "Marketing Pro", status: "Negotiation", value: "$9,500", created: "2024-01-10" },
];

export default function LeadsPage() {
  const [leads, setLeads] = useState(initialLeads);
  const [showModal, setShowModal] = useState(false);
  const [newLead, setNewLead] = useState({ name: "", email: "", company: "", status: "New", value: "" });
  const [search, setSearch] = useState("");

  const filteredLeads = leads.filter(l => l.name.toLowerCase().includes(search.toLowerCase()) || l.email.toLowerCase().includes(search.toLowerCase()));

  const handleAddLead = () => {
    if (newLead.name && newLead.email) {
      setLeads([...leads, { ...newLead, id: leads.length + 1, created: new Date().toISOString().split('T')[0] }]);
      setNewLead({ name: "", email: "", company: "", status: "New", value: "" });
      setShowModal(false);
    }
  };

  return (
    <DashboardLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Lead Management</h1>
          <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <span className="mr-1">+</span> Add Lead
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <input
              type="text"
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
            />
          </div>
          
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Value</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Created</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{lead.name}</p>
                    <p className="text-xs text-gray-500">{lead.email}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{lead.company}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      lead.status === "New" ? "bg-blue-100 text-blue-800" :
                      lead.status === "Contacted" ? "bg-amber-100 text-amber-800" :
                      lead.status === "Qualified" ? "bg-purple-100 text-purple-800" :
                      lead.status === "Negotiation" ? "bg-indigo-100 text-indigo-800" :
                      "bg-green-100 text-green-800"
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium text-gray-900 dark:text-gray-100">{lead.value}</td>
                  <td className="px-6 py-4 text-right text-sm text-gray-600 dark:text-gray-400">{lead.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Add New Lead</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={newLead.name}
                  onChange={(e) => setNewLead({ ...newLead, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newLead.email}
                  onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700"
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={newLead.company}
                  onChange={(e) => setNewLead({ ...newLead, company: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700"
                />
                <input
                  type="text"
                  placeholder="Value"
                  value={newLead.value}
                  onChange={(e) => setNewLead({ ...newLead, value: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700"
                />
                <select
                  value={newLead.status}
                  onChange={(e) => setNewLead({ ...newLead, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700"
                >
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Qualified</option>
                  <option>Proposal</option>
                  <option>Negotiation</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400">Cancel</button>
                <button onClick={handleAddLead} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Lead</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}