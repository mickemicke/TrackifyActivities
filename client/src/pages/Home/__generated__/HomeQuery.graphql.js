/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Day_activity$ref = any;
export type HomeQueryVariables = {|
  username: string
|};
export type HomeQueryResponse = {|
  +activities: ?$ReadOnlyArray<?{|
    +title: ?string,
    +date: ?string,
    +$fragmentRefs: Day_activity$ref,
  |}>
|};
export type HomeQuery = {|
  variables: HomeQueryVariables,
  response: HomeQueryResponse,
|};
*/


/*
query HomeQuery(
  $username: String!
) {
  activities(username: $username) {
    title
    date
    ...Day_activity
    id
  }
}

fragment Day_activity on Activity {
  date
  title
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "username"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "username",
    "variableName": "username"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Activity",
        "kind": "LinkedField",
        "name": "activities",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Day_activity"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Activity",
        "kind": "LinkedField",
        "name": "activities",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bcdc57875993c4efef7e38b5f783ec3b",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery(\n  $username: String!\n) {\n  activities(username: $username) {\n    title\n    date\n    ...Day_activity\n    id\n  }\n}\n\nfragment Day_activity on Activity {\n  date\n  title\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4578b25d53726ebbe36f319c57ac5b38';

module.exports = node;
