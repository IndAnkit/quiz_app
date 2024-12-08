import { STORAGE_KEY } from "appConstants";
import {
  SCORE_CARD,
  START_QUIZ,
  SUBMIT_ANSWER,
  USER,
} from "appConstants/urlConstants";
import { api } from "lib/api";
import storage from "utils/storage";

export const getQustions = (useId) => {
  return api.get(`${START_QUIZ}/${useId}`);
};

export const submitAnswer = (payload) => {
  return api.post(SUBMIT_ANSWER, payload);
};

export const getSoreCard = (quizId) => {
  return api.get(`${SCORE_CARD}/${quizId}`);
};

export const getUser = (userId) => {
  let path = USER;
  if (userId) {
    path += `/${userId}`;
  }
  return api.get(path).then((_data) => {
    storage.setValue(STORAGE_KEY.USER_ID, _data?.data?.user_id);
    return _data;
  });
};
