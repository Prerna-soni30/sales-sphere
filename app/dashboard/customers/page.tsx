'use client';

import { useState } from "react";
import DashboardLayout from "@/components/dashboard-layout";

const initialCustomers = [
  { id: 1, name: "Acme Corporation", email: "contact@acme.com", phone: "+1 (555) 123-4567", deals: 12, revenue: "$45,000", status: "Active" },
  { id: 2, name: "Tech Solutions Inc", email: "info@techsol.com", phone: "+1 (555) 234-5678", deals: 8, revenue: "$32,500", status: "Active" },
  { id: 3, name: "Global Industries", email: "sales@global.com", phone: "+1 (555) 345-6789", deals: 15, revenue: "$78,000", status: "Active" },
  { id: 4, name: "Startup Innovations", email: "hello@startup.io", phone: "+1 (555) 456-7890", deals: 5, revenue: "$18,000", status: "Inactive" },
  { id: 5, name: "Digital Dynamics", email: "support@digital.io", phone: "+1 (555) 567-8901", deals: 10, revenue: "$52,000", status: "Active" },
];

export default function CustomersPage() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [showModal, setShowModal] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", phone: "", status: "Active" });
  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()));

  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.email) {
      setCustomers([...customers, { ...newCustomer, id: customers.length + 1, deals: 0, revenue: "$0" }]);
      setNewCustomer({ name: "", email: "", phone: "", status: "Active" });
      setShowModal(false);
    }
  };

  return (
    <DashboardLayout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Customers</h1>
          <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <span className="mr-1">+</span> Add Customer
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <input
              type="text"
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
            />
          </div>

          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Deals</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Revenue</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">{customer.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{customer.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{customer.phone}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">{customer.deals}</td>
                  <td className="px-6 py-4 text-right text-sm font-medium text-gray-900 dark:text-gray-100">{customer.revenue}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      customer.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Add New Customer</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={newCustomer.name}
                  onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newCustomer.email}
                  onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={newCustomer.phone}
                  onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700"
                />
                <select
                  value={newCustomer.status}
                  onChange={(e) => setNewCustomer({ ...newCustomer, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2 mt-6">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400">Cancel</button>
                <button onClick={handleAddCustomer} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Add Customer</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}