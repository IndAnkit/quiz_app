const fakeResult = {
  currentQuestionIndex: 0,
  data: [
    {
      id: 1,
      question:
        "How do you judge what should be added in the next version of the app?",
      options: [
        {
          id: 1,
          label: "Data Analysis",
        },
        {
          id: 2,
          label: "User’s feedback",
        },
        {
          id: 3,
          label: "Copy from similar product",
        },
        {
          id: 4,
          label: "Make a questionary",
        },
        {
          id: 5,
          label: "Personal feeling",
        },
      ],
    },
    {
      id: 2,
      question:
        "How do you judge what should be added in the next version of the app?",
      options: [
        {
          id: 1,
          label: "Data Analysis",
        },
        {
          id: 2,
          label: "User’s feedback",
        },
        {
          id: 3,
          label: "Copy from similar product",
        },
        {
          id: 4,
          label: "Make a questionary",
        },
        {
          id: 5,
          label: "Personal feeling",
        },
        {
          id: 2,
          question:
            "How do you judge what should be added in the next version of the app?",
          options: [
            {
              id: 1,
              label: "Data Analysis",
            },
            {
              id: 2,
              label: "User’s feedback",
            },
            {
              id: 3,
              label: "Copy from similar product",
            },
            {
              id: 4,
              label: "Make a questionary",
            },
            {
              id: 5,
              label: "Personal feeling",
            },
          ],
        },
      ],
    },
  ],
};

export const getQustions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: fakeResult,
      });
    }, 3000);
  });
};

export const submitAnswer = ({ payload }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(payload);
    }, 2000);
  });
};
