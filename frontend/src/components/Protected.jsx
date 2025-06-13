import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Protected = () => {
  const [showdata, setShowdata] = useState({});
  const fetchProtectedData = async () => {
    const token = localStorage.getItem('token');
    if (!token) return alert('No token found');

    try {
      const { data } = await axios.get('http://localhost:5000/protected', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data);
      setShowdata(data);
    } catch (err) {
      alert('Failed to fetch protected data');
    }
  };

  useEffect(() => {
    fetchProtectedData();
  }, [])

  return (
    <>
      {JSON.stringify(showdata)}
    </>
  );
};

export default Protected;
