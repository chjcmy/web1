import React, { useEffect, useState } from 'react';
import '../../static/css/App.css';
import Axios from 'axios';

function MakePage() {
  const [doList, setDoList] = useState([]);

  const [select, setSelect] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:8000/api/ContentType_read_post_all').then(
      (response) => {
        if (response.data != null) {
          setDoList(response.data);
        }
      },
    );
  }, []);
  const [inputs, setInputs] = useState({
    title: '',
    content: ''
  });

  const { title, content } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    const nextInputs = {
      ...inputs,
      [name]: value
    };
    setInputs(nextInputs);
  };
  const postThem = () => {
    console.log(select, title, content);
    Axios.post('http://localhost:8000/api/add_post/ContentTitle', {
      data: {
        subject: select,
        title,
        content
      }
    }).then((response) => {
      if (response.data != null) {
        console.log('insert');
      }
    });
  };

  return (
    <div>
      <select onChange={(e) => setSelect(e.currentTarget.value)}>
        <option value="" selected disabled hidden>
          ==선택하세요==
        </option>
        {doList.map((val) => {
          return (
            <option value={val.fields.subject}>{val.fields.subject}</option>
          );
        })}
      </select>
      <input
        name="title"
        placeholder="제목"
        onChange={onChange}
        value={title}
      />
      <input
        name="content"
        placeholder="내용"
        onChange={onChange}
        value={content}
      />
      <button onClick={postThem}>저장</button>
      <div>
        <b>값 : </b>
        {select}:{title}:({content})
      </div>
    </div>
  );
}

export default MakePage;
