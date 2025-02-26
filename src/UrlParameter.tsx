import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const UrlParameter = () => {
  //スレッド一覧取得
  const [psts, setPsts] = useState([]);
  //投稿一覧
  const [pst, setPst] = useState([]);

  //URLパラメーター
  const { thread_id } = useParams();

  //API Thread一覧取得
  useEffect(() => {
    //スレッドの投稿一覧取得
    //fetchで対象idの投稿一覧取得
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`)
      .then((response) => {
        if (!response.ok) {
          console.log("bad");
        } else {
          console.log(psts);
          return response.json();
        }
      })
      .then((json) => {
        if (json) {
          setPsts(json.posts);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  //スレッド投稿
  const postThread = () => {
    //fetchAPIを使い投稿をPOSS
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: pst }), //データをJSON化して送信
    });
  };

  return (
    <>
      <section>
        <h1>thread</h1>
        <p>パラメーターは{thread_id}です</p>
        <ul className="threadlist">
          {psts.map((pst, index) => (
            <li key={index}>{pst.post}</li>
          ))}
        </ul>

        <label htmlFor="">
          <input type="text" name="" id="" />
          <button type="submit">投稿</button>
        </label>
      </section>
    </>
  );
};

export default UrlParameter;
