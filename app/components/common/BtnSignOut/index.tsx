// BtnSignOut.tsx
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import {auth} from "@/firebase/googleConfig"

const BtnSignOut = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await signOut(auth); 
      localStorage.clear();
      router.push('/'); 
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <button className="" onClick={handleSignOut}>
      <p className="text-white text-base hover:text-slate-400">Sign out</p>
    </button>
  );
};

export default BtnSignOut;