import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading, setUser, setError } from '../redux/githubSlice'; 

const UserSearch = () => {
  const [username, setUsername] = useState(''); 
  const dispatch = useDispatch();

  const handleSearch = async () => {
    dispatch(setLoading(true)); 
    dispatch(setError(null)); 

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Usuario no encontrado');
      }
      const data = await response.json();
      dispatch(setUser(data)); 
    } catch (error) {
      dispatch(setError(error.message)); 
    } finally {
      dispatch(setLoading(false)); 
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Introduce el nombre de usuario de GitHub"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default UserSearch;
