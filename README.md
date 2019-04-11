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




[build-badge]: https://img.shields.io/travis/GRP-17/feedback-component/master.png?style=flat-square
[build]: https://travis-ci.org/GRP-17/feedback-component

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/GRP-17/feedback-component

[coveralls-badge]: https://img.shields.io/coveralls/GRP-17/feedback-component/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/GRP-17/feedback-component