// BtnSignOut.tsx
import { useRouter } from 'next/navigation';
import axios from 'axios';

const BtnSignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      // Get the token from local storage
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

      // Make a request to the logout URL
      const response = await axios.get('https://vietexpert-api.d.logique.co.id/api/admin/auth/logout', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      localStorage.clear();
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="" onClick={handleSignOut}>
      <p className="text-white text-base hover:text-slate-400">Sign out</p>
    </button>
  );
};

export default BtnSignOut;