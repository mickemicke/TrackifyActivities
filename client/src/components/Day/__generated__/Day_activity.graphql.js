/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Day_activity$ref: FragmentReference;
declare export opaque type Day_activity$fragmentType: Day_activity$ref;
export type Day_activity = {|
  +date: ?string,
  +title: ?string,
  +$refType: Day_activity$ref,
|};
export type Day_activity$data = Day_activity;
export type Day_activity$key = {
  +$data?: Day_activity$data,
  +$fragmentRefs: Day_activity$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Day_activity",
  "selections": [
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
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Activity",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'd4c798cd772b67aa4fe21c181e67ed4d';

module.exports = node;
