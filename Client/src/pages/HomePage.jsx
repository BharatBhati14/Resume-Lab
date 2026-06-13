import heroImg from "../assets/heroimg2.png";
import { useState } from "react";

const HomePage = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" />
        </svg>
      ),
      title: "AI Resume Writer",
      description:
        "Generate professional resumes instantly with AI-powered content suggestions.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      ),
      title: "Smart Templates",
      description:
        "Choose from recruiter-approved resume templates optimized for hiring success.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path d="M4 7h16v12H4z" />
          <path d="M9 7V5h6v2" />
        </svg>
      ),
      title: "1 Click PDF Export",
      description:
        "Download your resume instantly as a polished PDF ready to submit to employers.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path d="M4 20V10M10 20V4M16 20V14M22 20V7" />
        </svg>
      ),
      title: "ATS Score",
      description:
        "Analyze your resume and improve ATS compatibility before applying.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path d="M12 2l2.5 5.5L20 10l-5.5 2.5L12 18l-2.5-5.5L4 10l5.5-2.5z" />
        </svg>
      ),
      title: "Content Enhancement",
      description:
        "Improve bullet points and achievements with AI-driven writing assistance.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Document */}
          <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
          <path d="M14 2v5h5" />

          {/* Target */}
          <circle cx="16" cy="16" r="4" />
          <circle cx="16" cy="16" r="1.5" />

          {/* Check mark */}
          <path d="M14.5 16l1 1 2-2" />
        </svg>
      ),
      title: "Job-Specific Optimization",
      description:
        "Match your resume to your job description and improve keyword relevance.",
    },
  ];

  const faqs = [
    {
      question: "How does the AI Resume Builder work?",
      answer:
        "Our AI analyzes your experience, skills, and career goals to generate a professional, ATS-friendly resume tailored to your needs.",
    },
    {
      question: "Can I customize my resume after AI generates it?",
      answer:
        "Yes. You can edit every section, update content, change templates, and personalize your resume before downloading.",
    },
    {
      question: "Will my resume pass ATS systems?",
      answer:
        "Our resumes are designed with ATS compatibility in mind and include keyword optimization suggestions to improve your chances.",
    },
    {
      question: "Can I download my resume as a PDF?",
      answer:
        "Absolutely. You can export your completed resume as a professional PDF with a single click.",
    },
    {
      question: "Is the AI resume builder free?",
      answer:
        "Yes, you can create and edit resumes for free with premium upgrades available.",
    },
  ];

  const [active, setActive] = useState(null);

  // testimonial
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      image: "https://i.pravatar.cc/150?img=1",
      review:
        "The AI Resume Builder completely transformed my resume. I got 4 interview calls within two weeks of applying.",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      image: "https://i.pravatar.cc/150?img=3",
      review:
        "The ATS checker helped me identify missing keywords and improve my resume score significantly.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Specialist",
      image: "https://i.pravatar.cc/150?img=5",
      review:
        "I loved how quickly the AI generated professional bullet points. It saved me hours of work.",
    },
    {
      name: "David Wilson",
      role: "Data Analyst",
      image: "https://i.pravatar.cc/150?img=8",
      review:
        "The job-specific optimization feature helped me tailor my resume for every application effortlessly.",
    },
    {
      name: "Jessica Brown",
      role: "UX Designer",
      image: "https://i.pravatar.cc/150?img=9",
      review:
        "Beautiful templates and excellent AI suggestions. My resume finally feels polished and professional.",
    },
    {
      name: "Alex Carter",
      role: "Business Analyst",
      image: "https://i.pravatar.cc/150?img=11",
      review:
        "Easy to use, intuitive, and incredibly effective. The best resume-building tool I've tried.",
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <div className="w-8 h-8 rounded-lg bg-blue-600" /> */}
            <span className="font-bold text-3xl">ResumeLab</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <a href="#features">Features</a>
            <a href="#templates">Templates</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="flex gap-4">
            <button>Log In</button>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-7 mask-[linear-gradient(to_bottom,black_70%,transparent_100%)]">
          {/* <div className="absolute inset-0 bg-linear-to-br via-white" /> */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-indigo-50" />

          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
                  AI Powered Resume Builder
                </span>

                <h1 className="mt-8 text-6xl font-bold leading-17">
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
                  <div className="absolute -bottom-3 right-50 bg-white rounded-xl shadow-2xl p-4 text-black font-semibold">
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

        {/* Features Section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Everything You Need to Build the Perfect Resume
              </h2>
              <p className="text-slate-600 text-lg">
                Create professional, ATS-friendly resumes faster with powerful
                AI tools designed to help you land more interviews.
              </p>
            </div>

            <div className="grid md:grid-cols-3 border border-slate-200">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-10 text-center border-slate-200
                         md:not-nth-[3n]:border-r
                         nth-[-n+3]:md:border-b"
                >
                  <div className="flex justify-center mb-5">{feature.icon}</div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              {/* <span className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-5">
            Testimonials
          </span> */}

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Loved by Job Seekers Worldwide
              </h2>

              <p className="text-lg text-slate-600">
                Thousands of professionals use our AI Resume Builder to create
                stronger resumes and land more interviews.
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="
                bg-white
                rounded-3xl
                p-8
                border
                border-slate-200
                hover:shadow-xl
                transition-all
                duration-300
              "
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-5 text-yellow-400">
                    {[...Array(Math.round(Math.random() + 4))].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-slate-600 leading-7 mb-8">
                    "{item.review}"
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.name}
                      </h4>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pt-15 pb-25 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600">
                Everything you need to know about our AI Resume Builder.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => {
                const isOpen = active === index;

                return (
                  <div
                    key={index}
                    className={`rounded-3xl p-6 transition-all duration-300 ${
                      isOpen ? "bg-indigo-50" : "bg-slate-50 hover:bg-slate-100"
                    }`}
                  >
                    <button
                      onClick={() => setActive(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left hover:cursor-pointer"
                    >
                      <p
                        className={`text-xl font-medium ${
                          isOpen ? "text-indigo-800" : "text-slate-900"
                        }`}
                      >
                        {faq.question}
                      </p>

                      <svg
                        className={`w-6 h-6 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-40 mt-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-slate-700 text-lg leading-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        
      </main>

      <footer className="bg-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h3 className="font-bold text-xl">ResumeLab</h3>

              <p className="mt-4 text-slate-400">
                AI-powered resumes for modern careers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>

              <ul className="space-y-3 text-slate-400">
                <li>Resume Builder</li>
                <li>Templates</li>
                <li>Cover Letters</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>

              <ul className="space-y-3 text-slate-400">
                <li>Blog</li>
                <li>Career Advice</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>

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
