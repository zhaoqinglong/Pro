import '@babel/polyfill';
import 'url-polyfill';
import dva from 'dva';
import Mmbs from 'Mmbs';
import createHistory from 'history/createHashHistory';
// user BrowserHistory
// import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import 'moment/locale/zh-cn';
import './rollbar';

import './index.less';
// import Mmbs Backend SDK


// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
app.use(createLoading());

// 3. Register global model
app.model(require('./models/global').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
// app.start('#root');
// 5. Load Configs
fetch('/static/setting.json')
  .then(response => response.json())
  .then(json => {
    console.log(Mmbs);
    Mmbs.initialize(json.applicationId);
    Mmbs.serverURL = json.serverURL;
    Mmbs.useAllowAnonymousKey = true;
    Mmbs.allowAnonymousKey = "myAllowAnonymousKey";
  })
  .finally(() => {
    // 6. Start
    app.start('#root');
  });

export default app._store; // eslint-disable-line
