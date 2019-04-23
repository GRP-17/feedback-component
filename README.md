# feedback-component

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

This is a feedback form React component for the Feedback Analysis project.

## Preview

![](https://ws3.sinaimg.cn/large/006tNc79gy1g1z59gha15j30xi0ck0tg.jpg)

[Live demo](https://feedback-component.herokuapp.com/)

## Install

```bash
$ npm install feedback-component
```

## Usage

```jsx
<FeedbackForm
  dashboardId="d8dbc176-8ba0-41a7-a777-3734af30f8ca" /* the dashboard ID, required */
  textMaxLength={5000} /* The max length of text, default: 5000 */
  textPlaceholder="Details..." /* The placeholder for the text input, default: "Details..." */
  defaultRating={5} /* The default rating, default: 5 */
  loadingHint="Loading..." /* The loading hint, default: "Loading..." */
/>
```

## Related

- [feedback-backend](https://github.com/GRP-17/feedback-backend)
- [feedback-frontend](https://github.com/GRP-17/feedback-frontend)

## Dependency Used

|                          Dependency                          |  Version  |                         Description                          |                            Usage                             |
| :----------------------------------------------------------: | :-------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                 [antd](https://ant.design/)                  | `^3.16.2` | An enterprise-class UI design language and React-based implementation with a set of high-quality React components |         Used to style most of appearance of the app.         |
|           [axios](https://github.com/axios/axios)            | `^0.18.0` |    Promise based HTTP client for the browser and node.js     |      As a convenient tool to make requests to backend.       |
| [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) | `^1.11.0` |      A babel plugin for importing components on demand.      | Used to import `antd` components on demand so as to reduce the size of the final built app. |
|                [moment](http://momentjs.com/)                | `^2.24.0` |       Parse, validate, manipulate, and display dates.        | Used to parse the date object / timestamp sent from backend as formatted date string to be shown. |
|                [react](https://reactjs.org/)                 | `^16.8.1` |      A JavaScript library for building user interfaces.      |         A base framework language to build our app.          |
|     [react-dom](https://reactjs.org/docs/react-dom.html)     | `^16.8.1` | This package provides DOM-specific methods that can be used at the top level of app. |         As a necessary peer dependency with `react`.         |
|            [nwb](<https://github.com/insin/nwb>)             | `0.23.x`  | A toolkit for React, Preact, Inferno & vanilla JSapps, React libraries and other npm modules for the web, with no configuration. |    Used to create the node module and publish it to NPM.     |
|        [nwb-less](https://github.com/insin/nwb-less)         | `^0.7.1`  |                     Less plugin for nwb.                     | Plugin enabling a [Less](http://lesscss.org/) loading pipeline for `.less` files in [nwb](https://github.com/insin/nwb#readme) using [less-loader](https://github.com/webpack-contrib/less-loader#readme). |
|            [serve](https://github.com/zeit/serve)            | `^11.0.0` |          Static file serving and directory listing.          |        Used to serve the app on a server like Heroku.        |


[build-badge]: https://img.shields.io/travis/GRP-17/feedback-component/master.png?style=flat-square
[build]: https://travis-ci.org/GRP-17/feedback-component

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/GRP-17/feedback-component

[coveralls-badge]: https://img.shields.io/coveralls/GRP-17/feedback-component/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/GRP-17/feedback-component