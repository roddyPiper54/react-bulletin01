export const Home = (props) => {
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
