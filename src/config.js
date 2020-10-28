export default {
  // Debe estar siempre
  install() {},

  // Propiedad local para almacenarla config
  config: {},

  // Inicializar la llamada al JSON externo
  async start(Vue) {
    const request = await fetch("/config.json");
    const config = await request.json();

    // Guardamos propiedad global /ver App.vue
    Vue.prototype.$config = config;
    // Seteamos el config local
    this.config = config;
  },
  get() {
    // Getter para obtener config fuera de vue
    return this.config;
  }
};
