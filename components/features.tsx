export default function Features() {
  const features = [
    { icon: "👥", title: "Lead Management", desc: "Track and manage leads through the sales pipeline." },
    { icon: "💼", title: "Sales Pipeline", desc: "Visualize your sales process and forecast revenue." },
    { icon: "🏢", title: "Customer Management", desc: "Store customer details and interaction history." },
    { icon: "📊", title: "Analytics & Reporting", desc: "Gain insights with customizable reports and dashboards." },
    { icon: "📧", title: "Email Integration", desc: "Sync with your email and track communications." },
    { icon: "🔒", title: "Security & Permissions", desc: "Role-based access control and data protection." },
  ];

  return (
    <section className='py-12 bg-white dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-center text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10'>
          Features
        </h2>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {features.map((f, i) => (
            <div key={i} className='flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg'>
              <div className='mb-4 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center'>
                <span className='text-blue-600 dark:text-blue-400 text-2xl'>{f.icon}</span>
              </div>
              <h3 className='mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100'>{f.title}</h3>
              <p className='text-gray-600 dark:text-gray-400'>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}