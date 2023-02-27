import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpHaV1KQmFJfFBmQGlbfVRydEUmHVdTRHRcQl9hT39UdEdhWH5bd3U=;Mgo+DSMBPh8sVXJ0S0J+XE9AflRBQmFBYVF2R2BJelRydl9EYEwxOX1dQl9gSXxRcERkW31ccXVdQWE=;ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxLdkx0RWFab1t6dldMYlxBJAtUQF1hSn5RdENiXn1ccnVXRmJd;MTIwOTIzOUAzMjMwMmUzNDJlMzBaMEUvakJVMGVrNmN2L3FMdktZNXpKZDluTnFoalA0WkFtS05HV0RPN1VjPQ==;MTIwOTI0MEAzMjMwMmUzNDJlMzBkTlV2c2JUeFJzeFJXSm0ra3dyVHp0eElqSFhzaGIxMG40UU9RT0VmUThjPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmBWfFtpR2NbfE51fldEal5RVBYiSV9jS31TdEdlWHhccnZURGdbVA==;MTIwOTI0MkAzMjMwMmUzNDJlMzBrcnp4dVl6c2FWMmVNMmZRMXdxOTIzNXlvc2FhTmJwV1V5OTRyc0tWZko4PQ==;MTIwOTI0M0AzMjMwMmUzNDJlMzBKL3Q5dGFEdWF1aE9sUkMvclJzWUplNFh0MzhxSlR4V1N5bCtFM0RrS2tBPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXnxLdkx0RWFab1t6dldMYlxBJAtUQF1hSn5RdENiXn1ccnVWRWRc;MTIwOTI0NUAzMjMwMmUzNDJlMzBMUnRLMlN6RHNHSmhYSkNCdzlHS04zQ0tMMGhOb051b3BzSGhjMUxNQ1JjPQ==;MTIwOTI0NkAzMjMwMmUzNDJlMzBpMk8zbWxjQjNRdXJrK1NTOFZFR0EwVVd3YWpDTHBvN2ZKMzU4bVB1NkI4PQ==;MTIwOTI0N0AzMjMwMmUzNDJlMzBrcnp4dVl6c2FWMmVNMmZRMXdxOTIzNXlvc2FhTmJwV1V5OTRyc0tWZko4PQ==');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
