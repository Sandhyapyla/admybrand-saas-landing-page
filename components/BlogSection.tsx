export default function BlogSection() {
  const posts = [
    {
      title: 'AI in Marketing: What You Need to Know',
      excerpt: 'Discover how AI is revolutionizing brand campaigns and customer targeting.',
      content: `Artificial Intelligence (AI) is transforming the marketing landscape. From automating ad placements to analyzing customer data, AI tools empower marketers to make data-driven decisions and achieve better results in less time.`,
    },
    {
      title: 'Top 5 Tools for Smarter Ad Campaigns',
      excerpt: 'Explore our curated list of the best AI marketing tools in 2025.',
      content: `This article reviews the top 5 tools of 2025, including budget optimizers, creative A/B testers, AI copywriters, and predictive analytics platforms.`,
    },
    {
      title: 'How ADmyBRAND AI Suite Boosted ROI by 70%',
      excerpt: 'A customer success story detailing impressive results with our platform.',
      content: `Learn how ADmyBRAND AI Suite delivered a 70% ROI boost through real-time insights and AI-powered optimizations.`,
    },
  ];

  return (
    <section className="px-6 py-16 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Latest from Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-slate-300 mb-2">{post.excerpt}</p>
              <details className="text-slate-200 text-sm group">
                <summary className="cursor-pointer text-indigo-400 hover:underline transition duration-200">
                  <span className="group-open:hidden">Read More →</span>
                  <span className="hidden group-open:inline">Hide ↑</span>
                </summary>
                <p className="mt-2 leading-relaxed text-slate-300">{post.content}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
