import { useMediaQuery } from "./useMediaQuery";
import { BreakPoints } from "../lib/contants/enums/BreakPoints";

export const useNoteBook = () =>
  useMediaQuery(`(max-width: ${BreakPoints.NOTEBOOK}px)`);

export const useBigTablet = () =>
  useMediaQuery(`(max-width: ${BreakPoints.BIG_TABLET}px)`);

export const useTablet = () =>
  useMediaQuery(`(max-width: ${BreakPoints.TABLET}px)`);

export const useBigMobile = () =>
  useMediaQuery(`(max-width: ${BreakPoints.BIG_PHONE}px)`);
