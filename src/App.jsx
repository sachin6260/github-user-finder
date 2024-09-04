import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
 import './App.css';
import RepoList from './components/RepoList';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);

  const handleSearch = async (username) => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const user = await userResponse.json();

      if (userResponse.ok) {
        const reposResponse = await fetch(user.repos_url);
        const repos = await reposResponse.json();
        setUserData(user);
        setRepositories(repos);
      } else {
        setUserData(null);
        setRepositories([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setUserData(null);
      setRepositories([]);
    }
  };

  return (
    <div className="app-container">
      <h1>GitHub User Finder</h1>
      <SearchBar onSearch={handleSearch} />
      {userData && <UserProfile user={userData} />}
      {repositories.length > 0 && <RepoList repositories={repositories} />}
    </div>
  );
};

export default App;
