import { useState, useEffect } from 'react';

const useRepositories = () => {
  const [repositories, setRepositories] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async() => {
    setLoading(true);
    const res = await fetch('http://192.168.43.204:5000/api/repositories');
    const jsonResponse = await res.json();
    setLoading(false);
    setRepositories(jsonResponse);

  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };

};

export default useRepositories;