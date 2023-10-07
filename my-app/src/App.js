import React, {useState} from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000';
axios.defaults.withCredentials=true;
const App = ()=>{
  const [data, setData] = useState(null);
  const onClick = ()=>{
    axios.post(`/api/create-session`).then(response => {
      setData(response.data);
    }).catch(e=>{console.log(e)});
    axios.post(`/api/test-data`,
    {
      'a' : 'b'
    },
    {
      'headers' : {
        "Content-Type" : 'application/json'
        
      }
    }).then(response => {
      setData(response.data);
    }).catch(e=>{console.log(e)});
  }
  const onClick2 = ()=>{
    axios.get(`/api/exists-session`).then(response => {
      console.log(response);
    });
  }
  return (
    <div>
      <div>
        <h3>Axios 테스트해보기</h3>
        <button onClick={onClick}>불러오기</button>
        <button onClick={onClick2}>확인하기</button>
      </div>
      {data && 
        <div>
          <br />
          번호 : {data.postId} <br />
          Email : {data.email} <br />
          Body : {data.body} <br />
        </div>
      }
    </div>
  );
}

export default App;