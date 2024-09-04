import React from 'react';

const RepoList = ({ repositories }) => {
  return (
    <div className="repositories-list">
      <h3>Repositories</h3>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList  ;
