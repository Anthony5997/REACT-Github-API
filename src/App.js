import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import FormSearch from './FormSearch';
import CardUser from './CardUser';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Rooter from './Rooter';

function App() {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [avatar, setAvatar] = useState('');
  const [bio, setBio] = useState('');
  const [userInput, setUserInput] = useState('');
  const [feed, setFeed] = useState('');
  const [error, setError] = useState(null);

  
    // useEffect(async() => {

    // await fetch("https://api.github.com/users/example")
    //     .then(result => result.json())
    //     .then(data => {
    //       console.log(data)
    //       setData(data)
    //       setApi(data)
    //     });
    // }, []);
    const setData = ({login, name, followers, following, public_repos, avatar_url, created_at, bio}) => {

      setUsername(login);
      setName(name);
      setFollowers(followers);
      setFollowing(following);
      setRepos(public_repos);
      setAvatar(avatar_url);
      setCreatedAt(created_at);
      setBio(bio);
   }


   
   const sendSetterToProps = {
     setUserInput: setUserInput,
   }

   console.log("USER INPUT UPDATE" , userInput);

  return (
    <div className="App">
      <header className="App-header">
        
        <div className="search">
             <FormSearch setter={sendSetterToProps} userInput={userInput} setData={setData}/> 

        </div>
        <div className="card">
          <CardUser userName={userName} 
          name={name}  
          followers={followers} 
          following={following} 
          avatar={avatar}
          repos={repos}
          createdAt={createdAt}
          bio={bio}
          userInput={userInput}
          setName={setName}/> 
        </div>
      
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
