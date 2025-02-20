type Props = {
  //PropsインターフェイスでHome関数の引数型定義
  threads: { title: string }[]; //titleプロパティを持つオブジェクトの配列
};

export const Home = (props: Props) => {
  const { threads } = props; //スレッド一覧配列をpropsでApp.tsxから渡す

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
