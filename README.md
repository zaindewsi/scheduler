# Interview Scheduler

Scheduler is a single-page app built with React, Webpack, Babel, Axios, and Webpack Dev Server. I used Storybook, Jest, and Cypress for testing and development. This app allows you to schedule, edit, and delete appointments.

## Live Site

You can test out Scheduler here: https://scheduler.zaindewsi.com/

## App Demo

<b>Saving an appointment</b>

!["Saving an appointment"](https://github.com/zaindewsi/scheduler/blob/main/docs/Save.gif)

<b>Deleting an appointment</b>

!["Deleting an appointment"](https://github.com/zaindewsi/scheduler/blob/main/docs/Selete.gif)

<b>Editing an appointment</b>

!["Editing an appointment"](https://github.com/zaindewsi/scheduler/blob/main/docs/Edit.gif)

## Get Started

1. Fork and clone this repository.
2. Install dependencies with `npm install`.
3. Start the web server with `npm start`. The app will be served at <http://localhost:8000/>.
4. Both servers run concurrently; requests are proxied from the Webpack development server to the API server.
5. Visit <http://localhost:8000/> in your browser.
6. Select a day of the week and add your appointment where a time slot is available.
7. You can edit or delete existing appointments.

## Dependencies

- axios: "^0.21.1",
- classnames: "^2.2.6",
- normalize.css: "^8.0.1",
- react: "^16.14.0",
- react-dom: "^16.9.0",
- react-scripts: "3.0.0"

## Dev-Dependencies

- @babel/core: "^7.4.3",
- @storybook/addon-actions: "^5.0.10",
- @storybook/addon-backgrounds: "^5.0.10",
- @storybook/addon-links: "^5.0.10",
- @storybook/addons: "^5.0.10",
- @storybook/react: "^5.0.10",
- @testing-library/jestdom": "^4.0.0",
- @testing-library/react: "^8.0.7",
- @testing-library/react-hooks: "^7.0.0",
- babel-loader: "^8.0.5",
- node-sass: "^4.14.0",
- prop-types: "^15.7.2",
- react-test-renderer: "^16.14.0"
