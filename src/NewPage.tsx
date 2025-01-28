import { useState } from "react";

export const NewPage = () => {
  const [thread, setThread] = useState("");

  //スレッド作成用関数
  // const createThread = (formData: string) => {
  //   //スレッド名取得
  //   const threadName = formData.get("threadName");
  //   alert(`You searched for '${threadName}'`);

  //   setThread(threadName);

  //   //return threadName;
  // };

  return (
    <>
      <h1>newPage</h1>

      <section>
        <h2>新規スレッド作成</h2>
        <p>スレッド名を入力して新規作成してください。</p>
        <div>
          <form>
            <input name="threadName" value={thread} type="text" placeholder="スレッド名を記入してください" />
            <button type="submit" onClick={() => setThread(thread)}>
              スレッド新規作成
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewPage;
