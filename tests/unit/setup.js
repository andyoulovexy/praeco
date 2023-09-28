import axios from 'axios';
import ElementPlus from 'element-plus';
import Vuex from 'vuex';
import MockAdapter from 'axios-mock-adapter';
import { createRouter as VueRouter } from 'vue-router';
import 'localstorage-polyfill';
import {
  config, mount, shallowMount, createLocalVue
} from '@vue/test-utils';
import * as Vue from 'vue';
import VueJsonPretty from 'vue-json-pretty';
import Prism from 'vue-prism-component';
import Treeselect from '@tanbo800/vue3-treeselect';
import 'prismjs';
// import locale from 'element-plus/lib/locale/lang/en';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBell,
  faChevronDown,
  faChevronUp,
  faEllipsisH,
  faEnvelope,
  faGlobe,
  faFile,
  faFileAlt,
  faFolder,
  faFolderOpen,
  faQuestionCircle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  faSlack, faMicrosoft, faGitter, faAws, faLine, faTelegram, faJira, faRocketchat
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'element-plus/lib/theme-chalk/index.css';
import 'normalize.css';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-yaml.min.js';
import '@tanbo800/vue3-treeselect/dist/vue3-treeselect.css';

import ECharts from 'vue-echarts';

import Bulb from '@/components/Bulb';
import DateTime from '@/components/DateTime';
import DefinitionTable from '@/components/DefinitionTable';
import ElastalertTimePicker from '@/components/ElastalertTimePicker';
import ESChart from '@/components/ESChart';
import EventTable from '@/components/EventTable';
import ExpandableAlert from '@/components/ExpandableAlert';
import FolderTree from '@/components/FolderTree';
import NavTree from '@/components/NavTree';
import PraecoFormItem from '@/components/PraecoFormItem';
import TableRow from '@/components/TableRow';
import ElastalertTimeView from '@/components/ElastalertTimeView';
import ConfigQuery from '@/components/config/ConfigQuery.vue';
import ConfigAggregation from '@/components/config/ConfigAggregation.vue';
import ConfigAlert from '@/components/config/alert/ConfigAlert.vue';
import ConfigAlertAlerta from '@/components/config/alert/ConfigAlertAlerta.vue';
import ConfigAlertAlertmanager from '@/components/config/alert/ConfigAlertAlertmanager.vue';
import ConfigAlertAmazonSes from '@/components/config/alert/ConfigAlertAmazonSes.vue';
import ConfigAlertAmazonSns from '@/components/config/alert/ConfigAlertAmazonSns.vue';
import ConfigAlertChatwork from '@/components/config/alert/ConfigAlertChatwork.vue';
import ConfigAlertCommand from '@/components/config/alert/ConfigAlertCommand.vue';
import ConfigAlertDatadog from '@/components/config/alert/ConfigAlertDatadog.vue';
import ConfigAlertDingtalk from '@/components/config/alert/ConfigAlertDingtalk.vue';
import ConfigAlertDiscord from '@/components/config/alert/ConfigAlertDiscord.vue';
import ConfigAlertEmail from '@/components/config/alert/ConfigAlertEmail.vue';
import ConfigAlertExotel from '@/components/config/alert/ConfigAlertExotel.vue';
import ConfigAlertGelf from '@/components/config/alert/ConfigAlertGelf.vue';
import ConfigAlertGitter from '@/components/config/alert/ConfigAlertGitter.vue';
import ConfigAlertGoogleChat from '@/components/config/alert/ConfigAlertGoogleChat.vue';
import ConfigAlertHttpPost from '@/components/config/alert/ConfigAlertHttpPost.vue';
import ConfigAlertHttpPost2 from '@/components/config/alert/ConfigAlertHttpPost2.vue';
import ConfigAlertJira from '@/components/config/alert/ConfigAlertJira.vue';
import ConfigAlertLineNotify from '@/components/config/alert/ConfigAlertLineNotify.vue';
import ConfigAlertMattermost from '@/components/config/alert/ConfigAlertMattermost.vue';
import ConfigAlertMsTeams from '@/components/config/alert/ConfigAlertMsTeams.vue';
import ConfigAlertPagerDuty from '@/components/config/alert/ConfigAlertPagerDuty.vue';
import ConfigAlertPagerTree from '@/components/config/alert/ConfigAlertPagerTree.vue';
import ConfigAlertRocketChat from '@/components/config/alert/ConfigAlertRocketChat.vue';
import ConfigAlertServiceNow from '@/components/config/alert/ConfigAlertServiceNow.vue';
import ConfigAlertSlack from '@/components/config/alert/ConfigAlertSlack.vue';
import ConfigAlertStomp from '@/components/config/alert/ConfigAlertStomp.vue';
import ConfigAlertTencentSms from '@/components/config/alert/ConfigAlertTencentSms.vue';
import ConfigAlertTelegram from '@/components/config/alert/ConfigAlertTelegram.vue';
import ConfigAlertTheHive from '@/components/config/alert/ConfigAlertTheHive.vue';
import ConfigAlertTwilio from '@/components/config/alert/ConfigAlertTwilio.vue';
import ConfigAlertOpsgenie from '@/components/config/alert/ConfigAlertOpsgenie.vue';
import ConfigAlertVictorOps from '@/components/config/alert/ConfigAlertVictorOps.vue';
import ConfigAlertZabbix from '@/components/config/alert/ConfigAlertZabbix.vue';
import ConfigKibanaDiscover from '@/components/config/ConfigKibanaDiscover.vue';
import ConfigTimeWindowFeature from '@/components/config/ConfigTimeWindowFeature.vue';
import ConfigOwner from '@/components/config/ConfigOwner.vue';
import ConfigPriority from '@/components/config/ConfigPriority.vue';
import ConfigDescription from '@/components/config/ConfigDescription.vue';
import ConfigSettings from '@/components/config/ConfigSettings.vue';
import ConfigCondition from '@/components/config/ConfigCondition.vue';
import ConfigScanEntireTimeframe from '@/components/config/ConfigScanEntireTimeframe.vue';
import ConfigLimitExcecution from '@/components/config/ConfigLimitExcecution.vue';

import store from '@/store';
import router from '@/router';

library.add(
  faBell,
  faFile,
  faFileAlt,
  faSlack,
  faRocketchat,
  faMicrosoft,
  faGitter,
  faAws,
  faLine,
  faTelegram,
  faJira,
  faGlobe,
  faEnvelope,
  faChevronUp,
  faChevronDown,
  faEllipsisH,
  faFolder,
  faFolderOpen,
  faQuestionCircle,
  faExclamationCircle
);

Vue.use(ElementPlus, { size: 'mini' });

Vue.component('VChart', ECharts);
Vue.component('Icon', FontAwesomeIcon);
Vue.component('VueJsonPretty', VueJsonPretty);
Vue.component('Prism', Prism);
Vue.component('Treeselect', Treeselect);

Vue.component('Bulb', Bulb);
Vue.component('DateTime', DateTime);
Vue.component('ConfigQuery', ConfigQuery);
Vue.component('ConfigAlert', ConfigAlert);
Vue.component('ConfigAlertAlerta', ConfigAlertAlerta);
Vue.component('ConfigAlertAlertmanager', ConfigAlertAlertmanager);
Vue.component('ConfigAlertAmazonSes', ConfigAlertAmazonSes);
Vue.component('ConfigAlertAmazonSns', ConfigAlertAmazonSns);
Vue.component('ConfigAlertChatwork', ConfigAlertChatwork);
Vue.component('ConfigAlertCommand', ConfigAlertCommand);
Vue.component('ConfigAlertDatadog', ConfigAlertDatadog);
Vue.component('ConfigAlertDingtalk', ConfigAlertDingtalk);
Vue.component('ConfigAlertDiscord', ConfigAlertDiscord);
Vue.component('ConfigAlertEmail', ConfigAlertEmail);
Vue.component('ConfigAlertExotel', ConfigAlertExotel);
Vue.component('ConfigAlertGelf', ConfigAlertGelf);
Vue.component('ConfigAlertGitter', ConfigAlertGitter);
Vue.component('ConfigAlertGoogleChat', ConfigAlertGoogleChat);
Vue.component('ConfigAlertHttpPost', ConfigAlertHttpPost);
Vue.component('ConfigAlertHttpPost2', ConfigAlertHttpPost2);
Vue.component('ConfigAlertJira', ConfigAlertJira);
Vue.component('ConfigAlertLineNotify', ConfigAlertLineNotify);
Vue.component('ConfigAlertMattermost', ConfigAlertMattermost);
Vue.component('ConfigAlertMsTeams', ConfigAlertMsTeams);
Vue.component('ConfigAlertPagerDuty', ConfigAlertPagerDuty);
Vue.component('ConfigAlertPagerTree', ConfigAlertPagerTree);
Vue.component('ConfigAlertRocketChat', ConfigAlertRocketChat);
Vue.component('ConfigAlertServiceNow', ConfigAlertServiceNow);
Vue.component('ConfigAlertSlack', ConfigAlertSlack);
Vue.component('ConfigAlertStomp', ConfigAlertStomp);
Vue.component('ConfigAlertTencentSms', ConfigAlertTencentSms);
Vue.component('ConfigAlertTelegram', ConfigAlertTelegram);
Vue.component('ConfigAlertTheHive', ConfigAlertTheHive);
Vue.component('ConfigAlertTwilio', ConfigAlertTwilio);
Vue.component('ConfigAlertOpsgenie', ConfigAlertOpsgenie);
Vue.component('ConfigAlertVictorOps', ConfigAlertVictorOps);
Vue.component('ConfigAlertZabbix', ConfigAlertZabbix);
Vue.component('ConfigAggregation', ConfigAggregation);
Vue.component('ConfigSettings', ConfigSettings);
Vue.component('ConfigKibanaDiscover', ConfigKibanaDiscover);
Vue.component('ConfigTimeWindowFeature', ConfigTimeWindowFeature);
Vue.component('ConfigOwner', ConfigOwner);
Vue.component('ConfigPriority', ConfigPriority);
Vue.component('ConfigDescription', ConfigDescription);
Vue.component('ConfigCondition', ConfigCondition);
Vue.component('ConfigScanEntireTimeframe', ConfigScanEntireTimeframe);
Vue.component('ConfigLimitExcecution', ConfigLimitExcecution);
Vue.component('DefinitionTable', DefinitionTable);
Vue.component('ElastalertTimePicker', ElastalertTimePicker);
Vue.component('ESChart', ESChart);
Vue.component('EventTable', EventTable);
Vue.component('ExpandableAlert', ExpandableAlert);
Vue.component('FolderTree', FolderTree);
Vue.component('NavTree', NavTree);
Vue.component('PraecoFormItem', PraecoFormItem);
Vue.component('TableRow', TableRow);
Vue.component('ElastalertTimeView', ElastalertTimeView);

config.stubs.transition = false;

export const mockAxios = new MockAdapter(axios);

export function mountComponent(comp, opts = {}) {
  let localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(ElementPlus);
  localVue.use(Vuex);

  return mount(comp, {
    attachTo: false,
    sync: false,
    localVue,
    router,
    store,
    propsData: opts.propsData
  });
}

export function shallowMountComponent(comp, opts = {}) {
  let localVue = createLocalVue();
  localVue.use(VueRouter);
  localVue.use(ElementPlus);
  localVue.use(Vuex);

  return shallowMount(comp, {
    attachTo: false,
    sync: false,
    localVue,
    router,
    store,
    propsData: opts.propsData
  });
}

class MutationObserver {
  constructor(callBack) {
    this.callBack = callBack;
  }

  observe(element) {
    this.element = element;
    return this.interval = setInterval(() => {
      const html = this.element.innerHTML;

      if (html !== this.oldHtml) {
        this.oldHtml = html;
        return this.callBack.apply(null);
      }
    }, 200);
  }

  disconnect() {
    return clearInterval(this.interval);
  }
}

global.MutationObserver = MutationObserver;

global.window.getSelection = function() {};
