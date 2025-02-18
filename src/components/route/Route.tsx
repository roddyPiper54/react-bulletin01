import { useRoutes } from "react-router-dom";
import Home from "../../Home";
import NewPage from "../../NewPage";
import Thread from "../../Thread";
import UrlParameter from "../../UrlParameter";

const Route = () => {
  const routingConfig = [
    {
      path: "/",
      Element: <Home />,
    },
    {
      path: "/newpage",
      Element: <NewPage />,
    },
    // {
    //   path: "/:threads/4e342bb8-9b0b-423d-97a0-50c7236f993f/posts", //中身なし
    //   //path: "/:threads/83fbbae8-fd46-4d93-9df7-7d8580e12941/posts",
    //   Element: <Thread />,
    // },
    {
      path: "/thread", //中身なし
      //path: "/:threads/83fbbae8-fd46-4d93-9df7-7d8580e12941/posts",
      Element: <Thread />,
    },
    {
      path: `/:threads/${thread_id}`,
      //path: "/:threads/thread_id",
      Element: <UrlParameter />,
    },
  ];

  const routing = useRoutes(routingConfig);

  return routing;
};
//routingConfigをuseRoutesの引数に渡して実行します。
//その結果として受けっとた戻り値(routing)をreturnで返却します。

export default Route;
