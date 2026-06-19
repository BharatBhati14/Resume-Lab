import { Link } from 'react-router-dom'
import useAuthStore from '../../../app/store/authStore';
import { apiClient } from '../../auth/api/authApi';
import { useQuery } from '@tanstack/react-query';

const DashboardPage = () => {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const logout = useAuthStore((state) => state.logout);

  // 1. On mount, ask backend if cookie is valid
  const { isLoading, error } = useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      const res = await apiClient.get('/api/auth/me'); 
      return res.data;
    },
    onSuccess: (data) => {
      // 2. Hydrate Zustand only if backend says yes
      checkAuth(data.success);
    },
    onError: () => {
      // 3. If cookie invalid/missing, ensure logged out
      logout(); 
    },
    // staleTime: 1000*60*60
  });

  if (isLoading) return <div>Loading...</div>;

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
