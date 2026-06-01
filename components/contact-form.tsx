'use client';

export default function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Name"
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
        />
      </div>
      <div>
        <textarea
          placeholder="Message"
          rows={4}
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
        ></textarea>
      </div>
      <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Send Message</button>
    </form>
  );
}
