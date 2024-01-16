// handleSignIn.ts
import axios from 'axios';

interface LoginResponse {
  status: boolean;
  message: string;
  data: {
    token: string;
    name: string;
  };
}

const handleSignIn = async (email: string, password: string) => {
  const response = await axios.post<LoginResponse>('https://vietexpert-api.d.logique.co.id/api/admin/auth/login', {
    email,
    password
  });

  if (response.status === 200 && response.data.status) {
    // Save token and name to local storage
    localStorage.setItem('token', response.data.data.token);
    localStorage.setItem('name', response.data.data.name);

    // Log token and name
    console.log('Tokenya nih:', response.data.data.token);
    console.log('Name:', response.data.data.name);
  } else {
    // Handle unsuccessful login here
    throw new Error('Login failed');
  }
};

export default handleSignIn;