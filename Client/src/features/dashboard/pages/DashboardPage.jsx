import { Link } from 'react-router-dom'

const DashboardPage = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        ResumeLab
      </h1>

      <Link
        to="/resume/new"
        className="mt-6 inline-block rounded bg-blue-600 px-4 py-2 text-white"
      >
        Create Resume
      </Link>
    </div>
  )
}

export default DashboardPage
