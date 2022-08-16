import { EVEN, ODD } from './constants';

export const evenOdd = value => (value % 2 === 0 ? EVEN : ODD);

export const transformationsFormat = transformations => `,${transformations}`;
