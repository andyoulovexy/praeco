import VuexPersistence from 'vuex-persist';
import * as Vuex from 'vuex';
import configs from './configs';
import server from './server';
import metadata from './metadata';
import appconfig from './appconfig';
import elastalert from './elastalert';
import config from './config';
import ui from './ui';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: state => ({ ui: state.ui }),
  key: 'praeco-vuex'
});

export default Vuex.createStore({
  modules: {
    configs,
    server,
    metadata,
    appconfig,
    elastalert,
    config,
    ui
  },
  plugins: [vuexLocal.plugin]
});
