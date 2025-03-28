import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const UrlParameter = () => {
  //スレッド一覧取得
  const [threads, setThreads] = useState([]);
  //投稿一覧
  //const [posts, setPost] = useState([]);
  //URLパラメーター
  const { thread_id } = useParams();

  //API Thread一覧取得
  //useEffect(() => {
  //onst getThreads = () => {
  //fetchで対象idの投稿一覧取得 //最初に一致した:を""に
  fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id.replace(/:/, "")}/posts`)
    .then((response) => {
      if (!response.ok) {
        console.log("bad");
      } else {
        console.log(threads);
        return response.json();
      }
    })
    .then((json) => {
      if (json) {
        setThreads(json.posts);
        //setPosts(json.posts);
      }
    })
    .catch((error) => console.error(error));
  //};
  //}, []);

  //スレッド投稿
  const postThread = (e) => {
    e.preventDefault();

    if (thread_id) {
      //fetchAPIを使い投稿をPOSS
      fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id.replace(/:/, "")}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post: posts }), //データをJSON化して送信
      }).then((response) => {
        if (!response.ok) {
          console.log("bad");
        } else {
          console.log("ok");

          window.alert(`${posts}投稿しました。`);
        }
      });
    } else {
      console.log("thread_idがないです");
    }
  };

  return (
    <>
      <section>
        <h1>thread</h1>
        <p>パラメーターは{thread_id}です</p>
        <ul className="threadlist">
          {threads.map((thread, index) => (
            <li key={index}>{thread.post}</li>
          ))}
        </ul>

        <form onSubmit={postThread} className="threadForm">
          <input type="text" name="" id="" onChange={(e) => setPost(e.target.value)} />
          <button type="submit" className="submitBtn">
            投稿
          </button>
        </form>
      </section>
    </>
  );
};

export default UrlParameter;
