import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc } from 'firebase/firestore';
import { db } from '../config/firebase-config';

function useSpecialtyForm() {
  const [LawyerInf, setLawyerInf] = useState({
    OfficeName: '',
    email: '',
    phone: '',
    Fax: '',
    Address: '',
    Website: '',
    Experience: '',
    specialty: [],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLawyerInf((prevLawyerInf) => ({
      ...prevLawyerInf,
      [name]: value,
    }));
  };

  async function submitForm(selectedOptions) {
    try {
      const LawyerDataRef = collection(db, 'LawyerData');
      await addDoc(LawyerDataRef, {
        ...LawyerInf,
        specialty: selectedOptions,
        phone: Number(LawyerInf.phone),
      });

      // Clear form fields
      setLawyerInf({
        OfficeName: '',
        email: '',
        phone: '',
        Fax: '',
        Address: '',
        Website: '',
        Experience: '',
        specialty: [],
      });

     
      navigate('/');
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error submitting the form:', error);
    }
  }

  return { LawyerInf, handleChange, submitForm };
}

export default useSpecialtyForm;
