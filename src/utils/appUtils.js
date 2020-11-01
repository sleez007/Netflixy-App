const noOp = () => ({ type: "NO_OP" });

export const apiPayloadCreator = ({
  url = "/",
  method = "GET",
  onSuccess = noOp,
  onFailure = noOp,
  label = "",
  data = null
}) => ({
  url,
  method,
  onSuccess,
  onFailure,
  data,
  label
});