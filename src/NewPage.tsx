import { useState } from "react";

export const NewPage = () => {
  const [thread, setThread] = useState("");
  const [pst, setPst] = useState("");
  //スレッド一覧取得

  //スレッド一覧に新規スレッド追加
  const createThread = () => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // データ形式を JSON として送る
      },
      body: JSON.stringify({ title: thread }),
    }).then((response) => {
      if (!response.ok) {
        console.log("bad");
      } else {
        //return response.json();
        console.log("ok");
      }
    });
  };

  //スレッドの投稿一覧取得
  const getThreadComment = () => {
    //fetchで対象idの投稿一覧取得
    fetch("https://railway.bulletinboard.techtrain.dev/threads/83fbbae8-fd46-4d93-9df7-7d8580e12941/posts").then((response) => {
      if (!response.ok) {
        console.log("bad");
      } else {
        //return response.json();
        console.log(pst);
      }
    });
    //consoleに出力
  };

  return (
    <>
      <h1>newPage</h1>

      <section>
        <h2>新規スレッド作成</h2>
        <p>スレッド名を入力して新規作成してください。</p>
        <div>
          <form onSubmit={createThread}>
            <input name="threadName" defaultValue={thread} type="text" placeholder="スレッド名を記入してください" onChange={(e) => setThread(e.target.value)} />
            <button type="submit">スレッド新規作成</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewPage;
