import { useEffect, useState } from "react";

export const Thread = () => {
  //スレッド一覧取得
  const [psts, setPsts] = useState([]);

  //API Thread一覧取得
  useEffect(() => {
    //スレッドの投稿一覧取得
    //fetchで対象idの投稿一覧取得
    fetch("https://railway.bulletinboard.techtrain.dev/threads/4e342bb8-9b0b-423d-97a0-50c7236f993f/posts")
      //fetch("https://railway.bulletinboard.techtrain.dev/threads/83fbbae8-fd46-4d93-9df7-7d8580e12941/posts")
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

        <ul className="threadlist">
          {psts.map((pst, index) => (
            <li key={index}>{pst.post}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Thread;
