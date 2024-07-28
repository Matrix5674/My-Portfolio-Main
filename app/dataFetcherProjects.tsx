// dataFetcher.tsx
import React, { useEffect, useState } from 'react';
import Projects, { ProjectProps } from './Components/Pages/Projects/page';

const DataFetcherProjects: React.FC = () => {
  const [data, setData] = useState<ProjectProps['data']>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/fetchProjectsData');

        if (!response.ok) {
          throw new Error('Network response was not ok (Projects)');
        }

        const result = await response.json();

        // Validate result format
        if (Array.isArray(result) && result.every(row => Array.isArray(row))) {
          setData(result as ProjectProps['data']);
        } else {
          throw new Error('Invalid data format (Projects)');
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

  return <Projects data={data} />;
};

export default DataFetcherProjects;
