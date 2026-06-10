// import { Link } from "react-router-dom";

// export default function HomePage() {
//   return (
//     <div className="bg-white text-gray-900">
//       {/* NAVBAR */}
//       <header className="flex items-center justify-between px-6 py-4 shadow-sm">
//         <h1 className="text-xl font-bold">
//           ResumeLab
//         </h1>

//         <nav className="flex items-center gap-6 text-sm">
//           <a href="#features" className="hover:text-blue-600">
//             Features
//           </a>
//           <a href="#templates" className="hover:text-blue-600">
//             Templates
//           </a>
//           <a href="#pricing" className="hover:text-blue-600">
//             Pricing
//           </a>

//           <Link
//             to="/login"
//             className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
//           >
//             Login
//           </Link>
//         </nav>
//       </header>

//       {/* HERO SECTION */}
//       <section className="px-6 py-20 text-center bg-linear-to-b from-blue-50 to-white">
//         <h2 className="text-4xl md:text-6xl font-bold leading-tight">
//           Build ATS-Friendly Resumes <br />
//           with AI in Minutes
//         </h2>

//         <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
//           ResumeLab helps you create professional resumes, improve content with AI,
//           and land your dream job faster. No design skills needed.
//         </p>

//         <div className="mt-8 flex justify-center gap-4">
//           <Link
//             to="/login"
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             Get Started Free
//           </Link>

//           <a
//             href="#features"
//             className="px-6 py-3 border rounded-lg hover:bg-gray-100"
//           >
//             Learn More
//           </a>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section id="features" className="px-6 py-20">
//         <h3 className="text-3xl font-bold text-center">
//           Why ResumeLab?
//         </h3>

//         <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
//           <div className="p-6 border rounded-xl shadow-sm">
//             <h4 className="font-semibold text-lg">
//               🤖 AI Resume Builder
//             </h4>
//             <p className="text-gray-600 mt-2">
//               Generate professional resumes instantly using AI tailored to your job role.
//             </p>
//           </div>

//           <div className="p-6 border rounded-xl shadow-sm">
//             <h4 className="font-semibold text-lg">
//               📊 ATS Score Checker
//             </h4>
//             <p className="text-gray-600 mt-2">
//               Optimize your resume to pass Applicant Tracking Systems easily.
//             </p>
//           </div>

//           <div className="p-6 border rounded-xl shadow-sm">
//             <h4 className="font-semibold text-lg">
//               ✨ One-Click Improvements
//             </h4>
//             <p className="text-gray-600 mt-2">
//               Improve bullet points, summaries, and skills with AI suggestions.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* TEMPLATES */}
//       <section id="templates" className="px-6 py-20 bg-gray-50">
//         <h3 className="text-3xl font-bold text-center">
//           Professional Templates
//         </h3>

//         <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
//           {[1, 2, 3].map((t) => (
//             <div
//               key={t}
//               className="h-64 bg-white border rounded-xl shadow-sm flex items-center justify-center"
//             >
//               Template {t}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="px-6 py-20">
//         <h3 className="text-3xl font-bold text-center">
//           How It Works
//         </h3>

//         <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto text-center">
//           <div>
//             <div className="text-4xl">1</div>
//             <p className="mt-2 font-semibold">Create Resume</p>
//             <p className="text-gray-600">
//               Fill your details or import LinkedIn.
//             </p>
//           </div>

//           <div>
//             <div className="text-4xl">2</div>
//             <p className="mt-2 font-semibold">Enhance with AI</p>
//             <p className="text-gray-600">
//               Improve content with one click.
//             </p>
//           </div>

//           <div>
//             <div className="text-4xl">3</div>
//             <p className="mt-2 font-semibold">Download PDF</p>
//             <p className="text-gray-600">
//               Export ATS-friendly resume instantly.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="px-6 py-20 bg-blue-600 text-white text-center">
//         <h3 className="text-3xl font-bold">
//           Ready to build your resume?
//         </h3>

//         <p className="mt-4 text-blue-100">
//           Join thousands of job seekers using ResumeLab.
//         </p>

//         <Link
//           to="/login"
//           className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100"
//         >
//           Get Started Now
//         </Link>
//       </section>

//       {/* FOOTER */}
//       <footer className="px-6 py-10 border-t text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} ResumeLab. All rights reserved.
//       </footer>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-blue-600">
            ResumeLab
          </h1>

          <nav className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#how" className="hover:text-blue-600">How it works</a>
            <a href="#demo" className="hover:text-blue-600">AI Demo</a>
            <a href="#pricing" className="hover:text-blue-600">Pricing</a>

            <Link
              to="/login"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full mb-6">
            ✨ AI-Powered Resume Builder
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Build Job-Ready Resumes <br />
            in Minutes with AI
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            ResumeLab helps you write, improve, and optimize your resume using AI.
            Get ATS-friendly resumes that actually get interviews.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md">
              Start Free
            </Link>

            <a href="#demo" className="px-6 py-3 border rounded-xl hover:bg-gray-50">
              Try AI Demo
            </a>
          </div>

          {/* mini stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">10k+</p>
              <p className="text-sm text-gray-500">Resumes Created</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">92%</p>
              <p className="text-sm text-gray-500">ATS Pass Rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">4.8/5</p>
              <p className="text-sm text-gray-500">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Everything you need to land interviews
          </h2>

          <p className="text-center text-gray-600 mt-3">
            Smart tools to write, improve and optimize your resume.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">
                🤖 AI Resume Writer
              </h3>
              <p className="mt-2 text-gray-600">
                Generate full professional resumes instantly based on your experience and job role.
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">
                📊 ATS Optimization
              </h3>
              <p className="mt-2 text-gray-600">
                Improve formatting and keywords to pass ATS filters used by companies.
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">
                ✍️ Smart AI Suggestions
              </h3>
              <p className="mt-2 text-gray-600">
                Improve bullet points, summaries, and skills with one click.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            How ResumeLab works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white p-6 rounded-xl border">
              <div className="text-blue-600 font-bold text-2xl">1</div>
              <h3 className="mt-2 font-semibold">Fill your details</h3>
              <p className="text-gray-600 mt-2">
                Add your experience, education, and skills in a simple form.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <div className="text-blue-600 font-bold text-2xl">2</div>
              <h3 className="mt-2 font-semibold">Enhance with AI</h3>
              <p className="text-gray-600 mt-2">
                Improve your resume content with AI suggestions instantly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <div className="text-blue-600 font-bold text-2xl">3</div>
              <h3 className="mt-2 font-semibold">Download PDF</h3>
              <p className="text-gray-600 mt-2">
                Export ATS-friendly resumes in one click.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* AI DEMO */}
      <section id="demo" className="py-24">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            See AI in action
          </h2>

          <div className="mt-10 border rounded-xl p-6 bg-white shadow">

            <div className="text-sm text-gray-500">Input</div>
            <div className="mt-2 p-3 bg-gray-100 rounded">
              worked at amazon as frontend dev
            </div>

            <div className="mt-6 text-sm text-gray-500">AI Output</div>
            <div className="mt-2 p-3 bg-blue-50 text-blue-700 rounded">
              Developed scalable frontend applications at Amazon using React, improving UI performance and accessibility across multiple systems.
            </div>

          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold">
            Simple Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {[
              {
                name: "Free",
                price: "$0",
                desc: "Basic resume builder"
              },
              {
                name: "Pro",
                price: "$9",
                desc: "AI + ATS optimization"
              },
              {
                name: "Premium",
                price: "$19",
                desc: "Everything + cover letters"
              }
            ].map((p, i) => (
              <div key={i} className="p-6 bg-white border rounded-xl shadow-sm">

                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-3xl font-bold mt-2 text-blue-600">{p.price}</p>
                <p className="text-gray-600 mt-2">{p.desc}</p>

                <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Choose Plan
                </button>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} ResumeLab. Built for job seekers.
      </footer>

    </div>
  );
}