import { useState, useEffect } from 'react'

export function List( { onClick } ) {
  const [data, setData] = useState([]);

  useEffect(() =>{
      const fetchData = async () => {
        try {
          const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
          const dataList = await response.json();
          setData(dataList)
        } catch (e) {
            console.error(e);
        }
      }

      fetchData();
    }, []
  );

  return (
    <div className="user-list">
      {data.map((user) => (
        <div className="user" key={user.id} onClick={() => onClick(user.id)}>{user.name}</div>
      ))}
    </div>
  )
}