import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AWSAppSyncClient from 'aws-appsync'
import { ApolloProvider } from '@apollo/react-hooks';
import AppSync from './aws-exports';
import { Auth } from 'aws-amplify';

// console.log(AppSync.graphqlEndpoint,AppSync["aws_project_region"], AppSync.authenticationType);
export const client = new AWSAppSyncClient(
  {
    url: AppSync['aws_appsync_graphqlEndpoint'],
    disableOffline: false,
    region: AppSync['aws_project_region'],
    shouldBatch: true,
    auth: {
      type: AppSync['aws_appsync_authenticationType'],
      jwtToken: async () => {
        let session;
        try {
          session = (await Auth.currentSession())
            .getAccessToken()
            .getJwtToken();
        } catch (err) {
          console.log(this, 'AWSAppSyncClient', err);
        }

        return session;
      }
    },
    // defaultOptions
  },
  {
    // cache
  }
);


ReactDOM.render(
  // <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  // </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
