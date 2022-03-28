function loginFormValidation(userId, password) {
  let dic = {
    success: false,
    message: "",
  };
  
  let userIdValue = userId.trim();
  let passwordValue = password.trim();
  if (!userIdValue && !passwordValue) {
    console.log("IN LOGIN FORM");
    dic["message"] = "UserId and Password cannot be empty";
  } else if (!userIdValue) {
    dic["message"] = "UserId cannot be empty";
  } else if (!passwordValue) {
    dic["message"] = "Password cannot be empty";
  } else {
    dic["success"] = true;
  }
  console.log(dic['message']);
  return dic;
}
export default loginFormValidation;
