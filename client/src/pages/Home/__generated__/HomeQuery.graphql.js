/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeQueryVariables = {|
  id: string
|};
export type HomeQueryResponse = {|
  +activity: ?{|
    +title: ?string,
    +date: ?string,
    +id: ?string,
  |}
|};
export type HomeQuery = {|
  variables: HomeQueryVariables,
  response: HomeQueryResponse,
|};
*/


/*
query HomeQuery(
  $id: ID!
) {
  activity(id: $id) {
    title
    date
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Activity",
    "kind": "LinkedField",
    "name": "activity",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "date",
        "storageKey": null
      },
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": (v1/*: any*/),
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "eb42ecf63629bb178bfab46f5ad82e67",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery(\n  $id: ID!\n) {\n  activity(id: $id) {\n    title\n    date\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ed9a3d9d81dd8c355dfc395d70df2a63';

module.exports = node;
