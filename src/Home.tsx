import { useEffect, useState } from "react";

export const Home = () => {
  //コンポーネントレンダリングするタイミングで処理させる場合は、state, fetch関数をまとめる
  const [threads, SetThreads] = useState([]);

  //API Thread一覧取得
  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads")
      .then((response) => {
        if (!response.ok) {
          console.log("bad");
        } else {
          return response.json();
        }
      })
      .then((json) => {
        if (json) {
          SetThreads(json);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1 className="title">スレッド一覧</h1>
      <section>
        <ul className="threadlist">
          {threads.map((thread, index) => (
            <li key={index}>{thread.title}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
