import { useState, useEffect } from 'react'

export function Details({ id }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    if (!id) {
      setUser(null);
      return;
    }

    const fetchUser = async () =>{
      setLoading(true);
      try {
        const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`);
        const selectedUser = await response.json();
        setUser(selectedUser);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  if (loading) {
    return <div className="user-loading">Loading...</div>;
  }

  if (!user) {
    return null;
  }
  
  return (
    <div className="user-details">
      <img src={user.avatar} alt="" className="user-avatar" />
      <h3 className="user-name">{user.name}</h3>
      <h4 className="user-city">City: {user.details.city}</h4>
      <h4 className="user-company">Company: {user.details.company}</h4>
      <h4 className="user-position">Position: {user.details.position}</h4>
    </div>
  )
}

    