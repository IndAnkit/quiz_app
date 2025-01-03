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
import { useEffect, useState } from "react";
import Modal from "components/Modal/Modal";

const QuestionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useIsQuestionLoading();
  const error = useError();
  const onRefresh = () => {
    const userId = storage.getUserId();
    dispatch(fetchQuestionById(userId));
  };

      // Close the modal
      const onClose = () => {
        setIsModalOpen(false);
    };

  useEffect(()=>{

      const handleBeforeUnload = (e) => {
          // Show the custom modal before refresh
          e.preventDefault();
          e.returnValue = ''; // Standard for modern browsers
          setIsModalOpen(true); // Show modal
          // return true;
      };

      // Add beforeunload event listener
      window.addEventListener('beforeunload', handleBeforeUnload);

      // Clean up event listener
      return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
      };
 
  },[])

  return (
    <Layout>
       {isModalOpen && <Modal onClose={onClose}/>}
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
