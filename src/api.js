import config from "./config";

export default {
  async fetchPosts() {
    // Emular un llamado al api
    await new Promise((resolve) => {
      resolve(alert(config.get().urlRest));
    });
  }
};
