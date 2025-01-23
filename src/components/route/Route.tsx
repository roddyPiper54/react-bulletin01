import { useRoutes } from "react-router-dom";
import NewPage from "../../NewPage";

const Route = () => {
  const routingConfig = [
    {
      path: "/newpage",
      Element: <NewPage />,
    },
  ];

  const routing = useRoutes(routingConfig);

  return routing;
};
//routingConfigをuseRoutesの引数に渡して実行します。
//その結果として受けっとた戻り値(routing)をreturnで返却します。

export default Route;
