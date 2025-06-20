import { Link } from '@tanstack/react-router';
import Header from './HeaderMenu';

interface LogoutConfirmProps {}

export default function LogoutConfirm(props: LogoutConfirmProps) {
  return (
    <div className="h-screen bg-white relative flex flex-col font-family-franklin">
      
      {/* Header */}
    <Header
      text="Log out"
    />

      {/* Modal */}
      <div className="flex flex-col items-center text-center bg-white border border-gray-300 shadow-md rounded-xl p-6 m-10 mt-20">
        <img src="./src/assets/Vector (2).png" alt="Warning" className="h-12 mb-4" />
        <h3 className="text-texto-violeta font-bold text-lg mb-2">Are you sure you want to log out?</h3>
        <p className="text-sm text- mb-6">
          You will be logged out and will need to log in again to access your account.
        </p>


        <div className="w-full flex flex-col gap-3">
  
          <Link
            to="/signin"
            className="bg-purple text-white font-bold py-2 rounded-full text-center hover:bg-purple-700 transition-colors"
          >
            YES
          </Link>

      
          <Link
            to="/menu"
            className="bg-purple-light text-purple font-bold py-2 rounded-full text-center hover:bg-purple-200 transition-colors"
          >
            CANCEL
          </Link>
        </div>
      </div>

     {/* Footer */}

      <footer className="flex justify-center mt-70">
        <img src="./src/assets/LogoFooter.png" alt="" />
      </footer>
    </div>
  );
}
