import React, { useEffect, useState } from 'react';
import '../../static/css/App.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Box from '@material-ui/core/Box';
import { Img } from 'react-image';

const FindTitle = (props) => {
  const [doList, setDoList] = useState([]);

  console.log(props);

  const [titleList, setTitleList] = useState([]);

  const [lookContent, setFindContent] = useState({ subject: '', content: '' });

  useEffect(() => {
    Axios.get('http://localhost:8000/api/ContentType_read_post_all').then(
      (response) => {
        if (response.data != null) {
          setDoList(response.data);
        }
      },
    );
    Axios.get('http://localhost:8000/api/ContentTitle_read_post_all').then(
      (response) => {
        if (response.data != null) {
          setTitleList(response.data);
        }
      },
    );
  }, []);

  const Delete = (val) => {
    console.log(val);

    Axios.get(`http://localhost:8000/api/delete_post/${val}`).then(
      (response) => {
        if (response != null) {
          console.log(response);
          Axios.get(
            'http://localhost:8000/api/ContentTitle_read_post_all',
            // eslint-disable-next-line no-shadow
          ).then((response) => {
            if (response.data != null) {
              setTitleList(response.data);
              console.log(props);
            }
          });
        }
      },
    );
  };

  const findContent = () => {
    console.log(lookContent.content);
    Axios.get(
      `http://localhost:8000/api/ContentTitleRead/${lookContent.subject}&${lookContent.content}`,
    ).then((response) => {
      setTitleList(response.data);
    });
  };

  return (
    <div>
      <div className="find-toolbar">
        <div className="find-block">
          <div className="find-menu vertical-bottom">
            <select
              value={lookContent.subject}
              onChange={(e) => {
                setFindContent({ ...lookContent, subject: e.target.value });
              }}
            >
              <option value="">선택해주세요</option>
              {doList.map((val) => (
                // eslint-disable-next-line react/jsx-key
                <option value={val.fields.subject}>{val.fields.subject}</option>
              ))}
            </select>
            <input
              type="text"
              value={lookContent.content}
              onChange={(e) => {
                setFindContent({ ...lookContent, content: e.target.value });
              }}
            />
            <button onClick={findContent}>검색</button>
          </div>
        </div>
      </div>
      <div>
        <Box>
          {titleList.map((val) => (
            <Box>
              <Link to={`/read/id=${val.pk}`}>
                <Img
                  className="front-Box"
                  src="../../static/images/gopher.gif"
                />
                <h2>{val.fields.subject}</h2>
                <h3 className="find-h2">{val.fields.title}</h3>
                <Moment
                  className="margin-top-10"
                  format="YYYY/MM/DD"
                  date={val.fields.date}
                ></Moment>
              </Link>
              <div className="select-Button">
                <Link to={`/modify/id=${val.pk}`}>
                  <button className="select-modify">수정</button>
                </Link>
                <button value={val.pk} onClick={() => Delete(val.pk)}>
                  삭제
                </button>
              </div>
            </Box>
          ))}
        </Box>
      </div>
      <p />
      <div className="margin-top-10">
        <Link to={'/make'}>
          <button className="alone">리스트 생성</button>
        </Link>
      </div>
    </div>
  );
};
export default FindTitle;
