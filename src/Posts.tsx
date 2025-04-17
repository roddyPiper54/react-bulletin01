//component名を変える。 Posts

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const Posts = () => {
  //投稿一覧
  const [postList, setPostList] = useState([]);
  //投稿
  const [post, setPost] = useState([]);
  //URLパラメーター
  const { thread_id } = useParams(); //:thread_id パラメータ名で取得できる。
  console.log(thread_id);

  //投稿一覧取得
  const getPosts = () => {
    //fetchで対象idの投稿一覧取得 //最初に一致した:を""に
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`) //:は元々ない！
      .then((response) => {
        if (!response.ok) {
          console.log("bad");
        } else {
          console.log(postList);
          return response.json();
        }
      })
      .then((json) => {
        if (json) {
          setPostList(json.posts);
        }
      })
      .catch((error) => console.error(error));
  };

  //初回レンダリング時に投稿一覧取得
  useEffect(() => {
    getPosts();
  }, []);

  //スレッド投稿
  const postThread = (e) => {
    e.preventDefault();

    if (thread_id) {
      //fetchAPIを使い投稿をPOSS
      fetch(`https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ post: post }), //データをJSON化して送信
      }).then((response) => {
        if (!response.ok) {
          console.log("bad");
        } else {
          window.alert(`${post}投稿しました。`);

          //入力欄を空にする postを""にする  一覧取得useEffectの依存配列のstate(post)が変更
          setPost("");

          //②投稿が成功したタイミングでもgetPostを実行
          getPosts();
        }
      });
    } else {
      console.log("thread_idがないです");
    }
  };

  //投稿文
  const handlePost = (e) => setPost(e.target.value);

  return (
    <>
      <section>
        <h1>thread</h1>
        <p>パラメーターは{thread_id}です</p>
        <ul className="threadlist">
          {postList.map((pst, index) => (
            <li key={index}>{pst.post}</li>
          ))}
        </ul>

        <form onSubmit={postThread} className="threadForm">
          <input type="text" value={post} name="" id="" onChange={handlePost} />
          <button type="submit" className="submitBtn">
            投稿
          </button>
        </form>
      </section>
    </>
  );
};

export default Posts;
