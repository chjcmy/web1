// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useEffect, useState } from 'react';
import '../../static/css/App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import Axios from 'axios';
import { useParams } from 'react-router';
import queryString from 'query-string';

const ModiFiPage = (id) => {
  const [readList, setReadList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const { url } = useParams();
  const queryable = queryString.parse(id.location.pathname);
  const [modiFiVal, setModifival] = useState({
    pk: queryable['/modify/id'],
    subject: '',
    title: '',
    content: '',
  });
  console.log(queryable['/modify/id']);

  useEffect(async () => {
    const result = await Axios.get(
      'http://localhost:8000/api/ContentTypeRead',
      {
        params: {
          id: queryable['/modify/id'],
        },
      },
    );

    setModifival({
      ...modiFiVal,
      subject: result.data[0].fields.subject,
      title: result.data[0].fields.title,
      content: result.data[0].fields.content,
    });
    setReadList(result.data);
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;

    const nextInputs = {
      ...modiFiVal,
      [name]: value,
    };
    setModifival(nextInputs);
    console.log(modiFiVal);
  };

  const upDate = () => {
    Axios.post('http://localhost:8000/api/update_post', {
      data: {
        pk: modiFiVal.pk,
        subject: modiFiVal.subject,
        title: modiFiVal.title,
        content: modiFiVal.content,
      },
    }).then((response) => {
      if (response.data != null) {
        console.log('update');
      }
    });
  };

  return (
    <div>
      {/* eslint-disable-next-line no-unused-vars */}
      {readList.map((val) => (
        <div>
          <input type="hidden" />
          <h1>주제</h1>
          <div>{modiFiVal.subject}</div>
          <h2>제목</h2>
          <input
            name="title"
            placeholder="제목"
            onChange={onChange}
            value={modiFiVal.title}
          />
          <h3>내용</h3>
          <input
            name="content"
            placeholder="내용"
            onChange={onChange}
            value={modiFiVal.content}
          />
          <button onClick={upDate}>저장</button>
        </div>
      ))}
    </div>
  );
};

export default ModiFiPage;
