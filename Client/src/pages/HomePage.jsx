import heroImg from "../assets/heroimg.jpeg";
import { useState } from "react";

const HomePage = () => {
  const features = [
    {
      // icon: <Wand2 size={28} />,
      title: "AI Resume Generator",
      desc: "Create professional resumes instantly using AI.",
    },
    {
      // icon: <FileText size={28} />,
      title: "ATS Optimization",
      desc: "Improve your chances of passing ATS filters.",
    },
    {
      // icon: <Briefcase size={28} />,
      title: "Job-Specific Resume",
      desc: "Tailor resumes for each application automatically.",
    },
    {
      // icon: <MessageSquare size={28} />,
      title: "AI Cover Letters",
      desc: "Generate compelling cover letters in seconds.",
    },
  ];

  const faqs = [
    {
      q: "Is the AI resume builder free?",
      a: "Yes, you can create and edit resumes for free with premium upgrades available.",
    },
    {
      q: "Are templates ATS-friendly?",
      a: "All templates are optimized for Applicant Tracking Systems.",
    },
    {
      q: "Can I download as PDF?",
      a: "Yes, export your resume in PDF format instantly.",
    },
    {
      q: "Can AI generate cover letters?",
      a: "Absolutely. AI can create personalized cover letters based on your resume.",
    },
  ];

  function FAQItem({ item }) {
    const [open, setOpen] = useState(false);

    return (
      <div className="border-b py-6">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between"
        >
          <span>{item.q}</span>

          <span>{open ? "-" : "+"}</span>
        </button>

        {open && <p className="mt-4 text-slate-600">{item.a}</p>}
      </div>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600" />
            <span className="font-bold text-xl">ResumeForge</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#features">Features</a>
            <a href="#templates">Templates</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="flex gap-4">
            <button>Sign In</button>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pt-10 pb-32">
          <div className="absolute inset-0 bg-linear-to-br from-blue-100 via-white to-indigo-100" />

          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
                  AI Powered Resume Builder
                </span>

                <h1 className="mt-8 text-6xl font-bold leading-tight">
                  Build a Professional Resume That Gets Interviews
                </h1>

                <p className="mt-6 text-xl text-slate-600">
                  Create ATS-friendly resumes, optimize keywords, and generate
                  cover letters with AI in minutes.
                </p>

                <div className="flex gap-4 mt-10">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-xl">
                    Create Resume
                  </button>

                  <button className="border px-8 py-4 rounded-xl">
                    View Templates
                  </button>
                </div>

                <div className="flex gap-8 mt-10 text-sm text-slate-500">
                  <span>✓ ATS Optimized</span>
                  <span>✓ AI Generated</span>
                  <span>✓ PDF Export</span>
                </div>
              </div>

              <div className="">
                <div className="relative">
                  <div className="absolute -bottom-6 right-36 bg-white rounded-xl shadow-2xl p-4">
                    ATS Score 94%
                  </div>

                  <img
                    // srcSet="https://kommodo.ai/i/k4PVt6J238wu35i9ljP6"
                    src={`${heroImg}`}
                    alt="Resume"
                    className="rounded-3xl "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h2 className="text-5xl font-bold">Everything You Need</h2>

              <p className="mt-4 text-slate-600">
                Designed to help you land more interviews.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
              {features.map((feature) => (
                <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl" />

                  <h3 className="mt-6 font-semibold text-xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-slate-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-32 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-center">
              Frequently Asked Questions
            </h2>

            <div className="mt-16">
              {faqs.map((item) => (
                <FAQItem item={item} />
              ))}
            </div>
          </div>
        </section>

        
      </main>

      <footer className="bg-slate-950 text-white py-20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-4 gap-10">

      <div>
        <h3 className="font-bold text-xl">
          ResumeForge
        </h3>

        <p className="mt-4 text-slate-400">
          AI-powered resumes for modern careers.
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-4">
          Product
        </h4>

        <ul className="space-y-3 text-slate-400">
          <li>Resume Builder</li>
          <li>Templates</li>
          <li>Cover Letters</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">
          Resources
        </h4>

        <ul className="space-y-3 text-slate-400">
          <li>Blog</li>
          <li>Career Advice</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">
          Company
        </h4>

        <ul className="space-y-3 text-slate-400">
          <li>About</li>
          <li>Privacy</li>
          <li>Contact</li>
        </ul>
      </div>

    </div>

  </div>

</footer>
    </>
  );
};

export default HomePage;
