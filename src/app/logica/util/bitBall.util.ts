import { match } from 'ts-pattern';
import { bitBall } from '../types';

export const toLabel = (b: bitBall): string =>
    match<bitBall>(b)
    .with(0, () => 'LOW')
    .with(1, () => 'HIGH')
    .otherwise(() => '?');
