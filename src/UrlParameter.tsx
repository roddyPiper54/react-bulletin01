import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const UrlParameter = () => {
  //スレッド一覧取得
  const [psts, setPsts] = useState([]);
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
      </section>
    </>
  );
};

export default UrlParameter;
