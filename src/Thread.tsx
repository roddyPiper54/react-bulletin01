import { useEffect, useState } from "react";

export const Thread = () => {
  const [psts, setPsts] = useState([]);
  //スレッド一覧取得

  //API Thread一覧取得
  useEffect(() => {
    //スレッドの投稿一覧取得
    //fetchで対象idの投稿一覧取得
    fetch("https://railway.bulletinboard.techtrain.dev/threads/83fbbae8-fd46-4d93-9df7-7d8580e12941/posts")
      .then((response) => {
        if (!response.ok) {
          console.log("bad");
        } else {
          return response.json();
          console.log(psts);
        }
      })
      .then((json) => {
        if (json) {
          setPsts(json);
        }
      })
      .catch((error) => console.error(error));
    // };
  }, []);

  return (
    <>
      <section>
        <h1>thread</h1>
        <section>
          <ul className="threadlist">
            {psts.map((pst, index) => (
              <li key={index}>{pst.posts}</li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
};

export default Thread;
