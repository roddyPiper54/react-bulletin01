import { useState } from "react";

export const NewPage = () => {
  const [thread, setThread] = useState("");

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
        console.log("ok");
      }
    });
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
