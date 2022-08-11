import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// eslint-disable-next-line no-undef
window.deepAR = DeepAR({
  licenseKey: '6fda241c565744899d3ea574dc08a18ce3860d219aeb6de4b2d23437d7b6dcfcd79941dffe0e57f0',
  canvasWidth: window.innerWidth,
  canvasHeight: window.innerHeight,
  libPath: './lib',
  segmentationInfoZip: 'segmentation.zip',
  canvas: document.getElementById('deepar-canvas'),
  numberOfFaces: 1, // how many faces we want to track min 1, max 4
  onInitialize: function () {
    // start video immediately after the initalization, mirror = true
    window.deepAR.startVideo(false);
  }
})
window.deepAR.downloadFaceTrackingModel('models/models-68-extreme.bin');