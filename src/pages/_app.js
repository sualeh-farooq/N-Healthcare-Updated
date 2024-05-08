import { useRouter } from 'next/router';
import '../styles/index.scss';
import 'sweetalert2/src/sweetalert2.scss';
import 'react-toastify/dist/ReactToastify.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/login';

  return (
    <>
      <Component {...pageProps} />
      {!isLoginPage && (
        <FloatingWhatsApp
          chatMessage="Hello there! 🤝 Our customer support is available from 9AM to 5PM, Monday to Saturday. We are here to assist you during these hours."
          phoneNumber="923268037143"
          accountName="N HealthCare"
          avatar="https://i.ibb.co/d4pMDBf/nlogo-whatsapp.png"
          statusMessage="Typically reply within a day"
        />
      )}
    </>
  );
}
