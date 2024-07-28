// dataFetcher.tsx
import React, { useEffect, useState } from 'react';
import About, { AboutProps } from './Components/Pages/About/page';

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<AboutProps['data']>([]);
  const [data2, setData2] = useState<AboutProps['data2']>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/fetchGoogleSheetsData');
        const response2 = await fetch('/api/fetchCertificationData');
        if (!response.ok) {
          throw new Error('Network response was not ok (Experience)');
        }
        if (!response2.ok) {
          throw new Error('Network response was not ok (Certifications)');
        }
        const result = await response.json();
        const result2 = await response2.json();
        // Validate result format
        if (Array.isArray(result) && result.every(row => Array.isArray(row))) {
          setData(result as AboutProps['data']);
        } else {
          throw new Error('Invalid data format (Experience)');
        }
        if (Array.isArray(result2) && result2.every(row => Array.isArray(row))) {
          setData2(result2 as AboutProps['data2']);
        } else {
          throw new Error('Invalid data format (Certifications)');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
  
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <About data={data} data2={data2} />;
};

export default DataFetcher;
