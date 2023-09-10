export const postContactUsRequest = (data) => ({
  method: "post",
  url: "contacts",
  config: {
    data,
  },
});