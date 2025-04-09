import { useState } from "react";

//名前かえる
export const NewThread = () => {
  const [thread, setThread] = useState("");

  //スレッド一覧に新規スレッド追加
  const createThread = (e) => {
    e.preventDefault(); //submitのデフォルトの処理を封じ込める

    fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: thread }), // データ形式をJSON化して送信
    }).then((response) => {
      if (!response.ok) {
        console.log("bad");
      } else {
        console.log("ok");

        window.alert(`${thread}スレッドを作成しました。`);
        window.location.href = "/";
      }
    });
  };

  return (
    <>
      <h1>新規スレッド作成</h1>
      <section>
        <p>スレッド名を入力して新規作成してください。</p>
        <div>
          <form onSubmit={createThread} className="threadForm">
            <input name="threadName" defaultValue={thread} type="text" placeholder="スレッド名を記入してください" onChange={(e) => setThread(e.target.value)} />
            <button type="submit" className="submitBtn">
              スレッド作成
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewThread;
