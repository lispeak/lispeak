import { getCenter, getLeft } from './alphabet';

// Logic
export const booleanTrue = 'da';
export const booleanFalse = getLeft(booleanTrue);
export const booleanOperationNot = 'i';
export const booleanOperationAnd = 'ye';
export const booleanOperationOr = 'yo';

// Space
export const directionForward = 'baj';
export const directionRight = 'baz';
export const directionUp = 'bav';

export const directionBackward = getLeft(directionForward);
export const directionLeft = getLeft(directionRight);
export const directionDown = getLeft(directionUp);

// Time
export const timeFuture = 'ra';
export const timePast = getLeft(timeFuture);
export const timePresent = getCenter(timePast, timeFuture);
