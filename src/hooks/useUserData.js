import { useEffect, useState } from 'react';
import { auth, db } from '../config/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export function useUserData() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const history = useNavigate();

  const usersRef = collection(db, 'users');

  

  useEffect(() => {

    const findUser = ((usersData) => {
      for(let i = 0; i < usersData.length; i++){
        const matchEmail = makeFirstLetterLowerCase(usersData[i].email);
        if(matchEmail === email){
          return usersData[i].username;
        }
      }
      return '';
  })

  const makeFirstLetterLowerCase = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

    const fetchData = async () => {
      const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
        if (authUser) {
          setUser(authUser);
          setEmail(authUser.email); 

          try {
            const data = await getDocs(usersRef);
            const usersData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            

            const foundUser = findUser(usersData);
             
            if (foundUser) {
              setUsername(foundUser);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        } else {
          history('/logIn');
        }
      });

      return () =>unsubscribe();
    };

    fetchData();
  }, [history, usersRef]);

  return { user, username, email };
}
