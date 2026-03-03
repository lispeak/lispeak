import {
  booleanFalse,
  booleanOperationAnd,
  booleanOperationNot,
  booleanOperationOr,
  booleanTrue,
} from '@repo/core';

console.log({ booleanTrue });
console.log({ booleanFalse });
console.log({ booleanOperationNot });
console.log({ booleanOperationAnd });
console.log({ booleanOperationOr });

const createGreeting = (subject: string) => `test service live for ${subject}`;

export const start = () => {
  const subject = process.env.TEST_SUBJECT ?? 'developers';
  console.log(createGreeting(subject));
};

if (import.meta.main) {
  start();
}
