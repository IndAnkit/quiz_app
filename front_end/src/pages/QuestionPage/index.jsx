import { useError, useIsQuestionLoading } from "appRedux/hooks";
import { fetchQuestionById } from "appRedux/questionsSlice";
import Layout from "components/Layout";
import Loader from "components/Loader";
import { useDispatch } from "react-redux";
import storage from "utils/storage";
import Error from "../../components/Error";
import Question from "./components/Question";
import StatusBar from "./components/StatusBar";
import SubmitAnswer from "./components/SubmitAnswer";

const QuestionPage = () => {
  const dispatch = useDispatch();
  const isLoading = useIsQuestionLoading();
  const error = useError();
  const onRefresh = () => {
    const userId = storage.getUserId();
    dispatch(fetchQuestionById(userId));
  };

  return (
    <Layout>
      {/* Question numbers */}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} onRefresh={onRefresh} />
      ) : (
        <>
          <StatusBar />
          <div className="pt-20 flex-1 overflow-hidden">
            <Question />
          </div>
          <SubmitAnswer />
        </>
      )}
    </Layout>
  );
};

export default QuestionPage;