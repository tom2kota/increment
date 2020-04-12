# increment-decrement
Simple increment / decrement React Redux App

[DEMO PAGE](https://tom2kota.github.io/increment)

```
  Errors:

  DOMException: "String contains an invalid character"

  InvalidCharacterError: String contains an invalid character
```  

SOLUTION: (use React.StrictMode)
```
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./components/App";
import reducers from './reducers'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStore(reducers)}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.register();
// serviceWorker.unregister();

```


-----

#### Deployment to GitHub Pages with Actions


Status of Action:


![React_App_Deploy_to_gh-pages_CI](https://github.com/tom2kota/increment/workflows/React_App_Deploy_to_gh-pages_CI/badge.svg)


----------------------------------------------------

#### deployment tips:


- [link](https://create-react-app.dev/docs/deployment/)


- [link](https://github.com/dceddia/create-react-app-customized)


- [link](https://itnext.io/hosting-a-react-app-for-free-using-github-pages-7328ea04b11c)


```
  npm install
  
  npm run deploy
```

  make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages


#### Using Node.js with GitHub Actions:

- [link](https://help.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions)

```
npm ERR! cipm can only install packages with an existing package-lock.json or npm-shrinkwrap.json with lockfileVersion >= 1. Run an install with npm@5 or later to generate it, then try again.
```

- [video](https://youtu.be/N63C0mkFDFw)

- [video](https://youtu.be/Yg5rpke79X4)

- [link](https://keithweaver.ca/lesson/deploy-react-gh-pages-using-github-actions?s=ytktc)

