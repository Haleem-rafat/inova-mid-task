const envConfigKeys = {
  base_url: import.meta.env.VITE_API_BASE,
};

Object.entries(envConfigKeys).forEach(([key, val]) => {
  if (!val) {
    if (!import.meta.env.PROD) {
      console.error(
        `${key} is not existed, please check the environmental variables to fix this error!`
      );
    } else {
      console.error('Some configurations are missing, please contact the developers to check!');
    }
  }
});

export default envConfigKeys;
