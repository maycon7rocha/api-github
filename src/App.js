import React, { useState } from 'react';
import './App.css';
import GitImagem from './img/git.jpeg'

// https://api.github.com/users/maycon7rocha
function App() {
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();

  const hadleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse));
      console.log('teste');
  }
  

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">GitHub Profile</h1>
      <form onSubmit={hadleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input 
              onChange={handleChange}
              type="text" 
              className="form-control" 
              required
              value={search}
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">Search</button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        { userData && (
          <div>
            <img src={userData.avatar_url} alt="" className="responsive rounded-circle" height="200px"/>
            <h1 className="pt-5">
              <a href={userData.url}>{userData.name}</a>
            </h1>
            <h3>{userData.location}</h3>
            <p>
              <a href={userData.blog} target="_new" className="text-info">
              {userData.blog}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
