const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300">
            Have feedback or questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
