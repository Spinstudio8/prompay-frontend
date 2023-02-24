// we can get the user in different ways either from session, localStorage, or redux
import {
  useSetSessionStorage,
  useGetSessionStorage,
  UseRemoveSessionStorage,
} from "./useSessionStorage";
export const getUser = () => {
  const userStr = useGetSessionStorage("admin");
  if (userStr) return JSON.parse(userStr);
  else return null;
};

export const getToken = () => {
  return useGetSessionStorage("token") || null;
};

export const setUserSession = (user) => {
  const token = user.accessToken;
  const admin = user.admin;
  useSetSessionStorage("token", token);
  useSetSessionStorage("admin", JSON.stringify(admin));
};

export const removeUserSession = () => {
  UseRemoveSessionStorage("token");
};
