import { ROUTES } from "appConstants";
import { lazy } from "react";
import {  useRoutes } from "react-router-dom";
const StartPage = lazy(() => import("pages/StartPage"));
const QuestionPage = lazy(() => import("pages/QuestionPage"));
const ScorePage = lazy(() => import("pages/ScorePage"));




const AppRouter = () => {
  const routes = useRoutes([
    {
      path: ROUTES.START,
    //   index: true,

      element: <StartPage />,
    },
    {
      path: ROUTES.QUESTION,
      element: <QuestionPage />,
    },
    {
      path: ROUTES.SCORE_CARD,
      element: <ScorePage />,
    },
  ]);
  return <>{routes}</>;
};

export default AppRouter;
