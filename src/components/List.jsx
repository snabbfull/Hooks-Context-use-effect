import { useState, useEffect } from 'react'

export function List( { onSelect, selectedId } ) {
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
    }, []);

  return (
    <ul className="user-list">
      {data.map((user) => (
        <li
          className={`user ${user.id === selectedId ? "active" : ""}`}
          key={user.id}
          onClick={() => onSelect(user.id)}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}