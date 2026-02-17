import { LoginForm } from '@/components/login-form';
import { RegisterForm } from '@/components/register-form';
import { useLocation } from 'react-router-dom';

const Login = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="relative min-h-screen w-full">
        {/* Dashed Top Fade Grid */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `
        linear-gradient(to right, #0000001A 1px, transparent 1px),
        linear-gradient(to bottom, #0000001A 1px, transparent 1px)
      `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 0',
            maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 70% at 50% 0%, #000 60%, transparent 100%)
      `,
            WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        />
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
          <div className="w-full max-w-md">
            {pathname === '/login' && <LoginForm />}
            {pathname === '/register' && <RegisterForm />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
