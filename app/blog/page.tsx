export default function BlogPage() {
  const posts = [
    {
      title: "How AI is Changing Marketing",
      desc: "Explore how artificial intelligence is reshaping the future of ad campaigns.",
      more: `AI is helping marketers automate repetitive tasks, optimize targeting, and predict customer behavior. From chatbots to personalized content delivery, AI is now at the core of high-performing marketing strategies.`
    },
    {
      title: "5 Automation Hacks to Scale Faster",
      desc: "Discover the top automations used by fast-growing brands.",
      more: `Top brands use automation for customer onboarding, lead scoring, email sequences, and ad optimization. These hacks reduce manual work and accelerate growth — without sacrificing personalization.`
    },
    {
      title: "Unlocking ROI with Predictive Analytics",
      desc: "Learn how predictive models drive smarter ad spend.",
      more: `Predictive analytics lets you allocate budget based on past campaign patterns and customer behaviors, improving ROI and reducing waste. AI tools now make this accessible for teams of any size.`
    },
    {
      title: "Personalization at Scale",
      desc: "Use AI to deliver 1:1 experiences across every channel.",
      more: `AI enables hyper-personalization — custom product suggestions, dynamic emails, and even personalized landing pages — all updated in real time to match customer intent and behavior.`
    },
  ];

  return (
    <main className="min-h-screen px-6 py-12 bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-12">Insights & Resources</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="mb-2 text-sm text-gray-700">{post.desc}</p>
            <details className="text-sm text-gray-600">
              <summary className="cursor-pointer text-blue-600 hover:underline font-medium">
                Read More →
              </summary>
              <p className="mt-2">{post.more}</p>
            </details>
          </div>
        ))}
      </div>
    </main>
  );
}
