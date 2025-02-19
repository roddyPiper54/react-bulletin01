//Propsインターフェイスで引数の型定義
type Props = {
  //component propsの型
  threads: { title: string }[]; //titleプロパティを持つオブジェクトの配列
};

export const Home = (props: Props) => {
  const { threads } = props;

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
