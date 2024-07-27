// dataFetcher.tsx
import React, { useEffect, useState } from 'react';
import About, { AboutProps } from './Components/Pages/About/page';

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<AboutProps['data']>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/fetchGoogleSheetsData');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        // Validate result format
        if (Array.isArray(result) && result.every(row => Array.isArray(row))) {
          setData(result as AboutProps['data']);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <About data={data} />;
};

export default DataFetcher;
