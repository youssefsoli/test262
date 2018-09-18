// Copyright (C) 2018 Ujjwal Sharma. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-Intl.NumberFormat.prototype.resolvedOptions
description: >
  Tests that Intl.NumberFormat.prototype.resolvedOptions throws a
  TypeError if called on a non-object value or an object that hasn't
  been initialized as a NumberFormat.
---*/

const invalidTargets = [undefined, null, true, 0, 'NumberFormat', [], {}, Symbol()];
const fn = Intl.NumberFormat.prototype.resolvedOptions;

invalidTargets.forEach(target => {
  assert.throws(
    TypeError,
    () => fn.call(target),
    `Calling resolvedOptions on ${target} was not rejected.`
  );
});
