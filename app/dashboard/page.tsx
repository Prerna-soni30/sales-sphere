import { Metadata } from "next";
import DashboardLayout from "@/components/dashboard-layout";
import { LineChart, BarChart } from "@/components/charts";

export const metadata: Metadata = {
  title: "Dashboard | SalesSphere CRM",
  description: "SalesSphere CRM Dashboard",
};

const kpiData = [
  { title: "Total Leads", value: "1,242", change: "+12%", color: "blue" },
  { title: "Total Customers", value: "856", change: "+8%", color: "green" },
  { title: "Deals Closed", value: "142", change: "+24%", color: "purple" },
  { title: "Revenue", value: "$48,254", change: "+18%", color: "amber" },
];

const leads = [
  { id: 1, name: "John Smith", email: "john@example.com", status: "New", value: "$5,000" },
  { id: 2, name: "Sarah Johnson", email: "sarah@company.com", status: "Contacted", value: "$8,500" },
  { id: 3, name: "Mike Wilson", email: "mike@tech.io", status: "Qualified", value: "$12,000" },
  { id: 4, name: "Emma Davis", email: "emma@startup.co", status: "Proposal", value: "$6,200" },
];

const customers = [
  { id: 1, name: "Acme Corp", email: "contact@acme.com", deals: 12, revenue: "$45,000" },
  { id: 2, name: "Tech Solutions", email: "info@techsol.com", deals: 8, revenue: "$32,500" },
  { id: 3, name: "Global Industries", email: "sales@global.com", deals: 15, revenue: "$78,000" },
  { id: 4, name: "Startup Inc", email: "hello@startup.io", deals: 5, revenue: "$18,000" },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Dashboard Overview</h1>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {kpiData.map((kpi) => (
            <div key={kpi.title} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{kpi.title}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-1">{kpi.value}</p>
                </div>
                <span className={`text-sm font-medium ${
                  kpi.color === "blue" ? "text-blue-600" :
                  kpi.color === "green" ? "text-green-600" :
                  kpi.color === "purple" ? "text-purple-600" : "text-amber-600"
                }`}>{kpi.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sales Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Sales Overview</h2>
          <LineChart />
        </div>

        {/* Lead Management & Deal Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Recent Leads</h2>
              <a href="/dashboard/leads" className="text-sm text-blue-600 hover:text-blue-500">View All</a>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="text-right text-xs font-medium text-gray-500 uppercase">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="py-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{lead.name}</p>
                      <p className="text-xs text-gray-500">{lead.email}</p>
                    </td>
                    <td className="py-3">
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
                    <td className="py-3 text-right text-sm font-medium text-gray-900 dark:text-gray-100">{lead.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Deal Pipeline</h2>
              <a href="/dashboard/deals" className="text-sm text-blue-600 hover:text-blue-500">View All</a>
            </div>
            <BarChart />
          </div>
        </div>

        {/* Customer Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Top Customers</h2>
            <a href="/dashboard/customers" className="text-sm text-blue-600 hover:text-blue-500">View All</a>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                <th className="text-left text-xs font-medium text-gray-500 uppercase">Deals</th>
                <th className="text-right text-xs font-medium text-gray-500 uppercase">Revenue</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="py-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{customer.name}</p>
                    <p className="text-xs text-gray-500">{customer.email}</p>
                  </td>
                  <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{customer.deals}</td>
                  <td className="py-3 text-right text-sm font-medium text-gray-900 dark:text-gray-100">{customer.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Activities & Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Activities</h2>
            <ul className="space-y-4">
              {[
                "John Smith was converted to Customer",
                "New lead from Tech Solutions added",
                "Deal closed with Acme Corp ($12,500)",
                "Meeting scheduled with Global Industries",
              ].map((activity, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{activity}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Notifications</h2>
            <ul className="space-y-4">
              {[
                "3 new leads require attention",
                "2 deals are about to expire",
                "Weekly report is ready",
              ].map((notification, i) => (
                <li key={i} className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3"></span>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{notification}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}