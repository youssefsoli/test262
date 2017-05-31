// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-rest-nested-array-undefined-hole.case
// - src/dstr-assignment/default/for-await-of.template
/*---
description: When DestructuringAssignmentTarget is an array literal and the iterable is an array with a "hole", an array with a single `undefined` element should be used as the value of the nested DestructuringAssignment. (for-await-of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
features: [destructuring-binding, async-iteration]
flags: [generated, async]
info: |
    IterationStatement :
      for await ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    5. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]
---*/
var x = null;

var counter = 0;

async function fn() {
  for await ([...[x]] of [[ , ]]) {
    assert.sameValue(x, undefined);
    counter += 1;
  }
}

fn()
  .then(() => assert.sameValue(counter, 1, 'iteration occurred as expected'), $DONE)
  .then($DONE, $DONE);
