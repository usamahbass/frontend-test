/**
 * auth
 *
 * set google data to localStorage
 */

const setProfile = (profile) => {
  const isProfileStr = JSON.stringify(profile);

  localStorage.setItem("profile", isProfileStr);
};

const getProfile = () => {
  const profile = localStorage.getItem("profile");

  if (profile) {
    return JSON.parse(profile);
  }

  return null;
};

const removeProfile = () => localStorage.removeItem("profile");

export { setProfile, getProfile, removeProfile };
