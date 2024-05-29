import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import MidSection from '../components/MidSection';
import LandingPage from '../components/LandingPage';
import HowItWorks from '../components/HotItWorks'; 
import Footer from '../components/Footer';
import ModalLoginPopUp from '../components/ModalLoginPopUp';

const FrontPage: React.FC = () => {
  const location = useLocation();
  const [isModalOpen, setModalOpen] = React.useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      window.history.replaceState({}, document.title, '/'); // Remove the token from the URL
    }
  }, [location]);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <ResponsiveAppBar />
      <ModalLoginPopUp open={isModalOpen} handleClose={handleModalClose} />
      <LandingPage />
      <MidSection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default FrontPage;
