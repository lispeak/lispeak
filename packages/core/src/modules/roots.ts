import { getOpposition } from './alphabet';

// Logic
export const booleanTrue = 'da';
export const booleanFalse = getOpposition(booleanTrue);
export const booleanOperationNot = 'i';
export const booleanOperationAnd = 'ye';
export const booleanOperationOr = 'yo';

// Space
export const directionForward = 'baj';
export const directionRight = 'baz';
export const directionUp = 'bav';

export const directionBackward = getOpposition(directionForward);
export const directionLeft = getOpposition(directionRight);
export const directionDown = getOpposition(directionUp);

// Time
export const timeFuture = 'dar';
export const timePresent = 'dir';
export const timePast = getOpposition(timeFuture);
