import { TYPES } from "./constantVal.js";

export const isEmpty = (str) => !str || !str.trim();
export const createDataId = (date = new Date()) =>
  `${date.getTime()}_${Math.random().toString(36).substring(2, 7)}`;
export const nextStepIndex = (str) => {
  const current = TYPES.findIndex((type) => type === str);
  const next = current + 1;
  return next < 3 ? next : 2;
};
