import { signin } from 'next-auth/client';
import Image from 'next/image';

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image src="/images/login.webp" height={400} width={400} objectFit="contain" />
      <button
        onClick={() => signin()}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer outline-none">
        Login with Facebook
      </button>
    </div>
  );
};

export default Login;
