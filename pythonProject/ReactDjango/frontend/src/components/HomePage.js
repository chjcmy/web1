// eslint-disable-next-line import/no-extraneous-dependencies,no-unused-vars
import React, { useEffect, useState } from 'react';
import '../../static/css/App.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { Img } from 'react-image';

function HomePage() {
  const [doList, setDoList] = useState([]);

  // eslint-disable-next-line no-shadow
  const allActivities = useSelector((state) => state.activities);

  useEffect(() => {
    Axios.get('http://localhost:8000/api/ContentType_read_post_all')
      .then((response) => {
        if (response.data != null) {
          setDoList(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const changeState = () => {
    console.log(allActivities);
  };

  return (
    <header className="page-header wrapper">
      <nav className="header-nav">
        <ul className="mylist">
          {doList.map((val) => (
            <li key={val.fields.subject}>
              <Link onClick={changeState} to={`/find${val.fields.url}`}>
                {val.fields.subject}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default HomePage;
