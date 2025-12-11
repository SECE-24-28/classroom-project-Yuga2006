export const registerUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  return true;
};

export const loginUser = (emailOrMobile, password) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return false;

  if (
    (user.email === emailOrMobile || user.mobile === emailOrMobile) &&
    user.password === password
  ) {
    return true;
  }
  return false;
};
