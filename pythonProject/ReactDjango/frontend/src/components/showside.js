import React, {
  useState,
  useEffect,
  useLayoutEffect
} from 'react';
import Axios from 'axios';
import '../../static/css/App.css';
import { Link } from 'react-router-dom';

function SHOWSIDE() {
  const [doList, setDoList] = useState([]);

  const signpost = () => {
    Axios.get('http://localhost:8000/api/newpost').then((response) => {
      if (response.data != null) {
        setDoList(response.data);
      }
    });
  };

  useEffect(() => {
    signpost();
  }, []);

  useLayoutEffect(() => {
    signpost();
  });

  return (
    <div>
      <nav className="side-nav">
        <h2>최신글</h2>
        <ul className="main-nav">
          {doList.map((val) => {
            const { pk } = val;
            const { subject, title } = val.fields;
            return (
              <li key={subject}>
                <Link to={`/read/id=${pk}`} length="10">
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default SHOWSIDE;
