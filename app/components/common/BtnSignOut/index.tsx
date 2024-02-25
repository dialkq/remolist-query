// BtnSignOut.tsx
import { useRouter } from 'next/navigation';
import axios from 'axios';

const BtnSignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
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