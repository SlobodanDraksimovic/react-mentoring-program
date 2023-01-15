import { MODAL_KIND } from '../constants';

type Keys = keyof typeof MODAL_KIND;

export type Modal = typeof MODAL_KIND[Keys];
