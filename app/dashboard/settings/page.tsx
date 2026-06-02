import DashboardLayout from "@/components/dashboard-layout";

const settingsTabs = ["Profile", "Company", "Notifications", "Billing", "Team", "Integrations"];

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">Settings</h1>

        {/* Mobile-friendly tabs */}
        <div className="flex flex-wrap gap-2 mb-4 md:mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          {settingsTabs.map((tab) => (
            <button
              key={tab}
              className="px-3 py-2 text-xs sm:text-sm font-medium text-blue-600 border-b-2 border-blue-600 whitespace-nowrap"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Profile Settings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                defaultValue="Admin User"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                defaultValue="admin@salessphere.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company</label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-md font-medium text-gray-900 dark:text-gray-100 mb-3">Change Password</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">New Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row justify-end gap-2">
            <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400 order-2 sm:order-1">Cancel</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 order-1 sm:order-2">Save Changes</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}