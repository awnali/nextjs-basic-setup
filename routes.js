module.exports = () => {
  return {
    "/": { page: "/" },
    "/404": { page: "/404" },
    "/about": { page: "/about" },
    "/home": { page: "/home" },
    "/home/:id": { page: "/home" }
  };
};
