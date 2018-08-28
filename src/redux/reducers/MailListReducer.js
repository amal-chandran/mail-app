import { actions } from "./../actions/MailListActions";

const initState = {
  inbox: [
    {
      Id: "1",
      Name: "Google",
      Subject: "Remove risky access to your data",
      Content:
        "Some apps or services you allowed to access your Google Account have not been verified by Google. Since they have extensive access to your personal information, you should remove their access unless you trust them."
    },
    {
      Id: "2",
      Name: "Google",
      Subject: "Remove risky access to your data",
      Content:
        "Some apps or services you allowed to access your Google Account have not been verified by Google. Since they have extensive access to your personal information, you should remove their access unless you trust them."
    },
    {
      Id: "3",
      Name: "Google",
      Subject: "Remove risky access to your data",
      Content:
        "Some apps or services you allowed to access your Google Account have not been verified by Google. Since they have extensive access to your personal information, you should remove their access unless you trust them."
    },
    {
      Id: "4",
      Name: "Google",
      Subject: "Remove risky access to your data",
      Content:
        "Some apps or services you allowed to access your Google Account have not been verified by Google. Since they have extensive access to your personal information, you should remove their access unless you trust them."
    }
  ]
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.LOAD_LIST:
      break;

    default:
      return state;
      break;
  }
};
