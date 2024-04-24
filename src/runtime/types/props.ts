import {
  BPV_SEVERITY,
  BPV_BADGE_SIZE,
  BPV_BUTTON_SIZE,
  BPV_FORM_STATE,
  BPV_OFFCANVAS_LAYOUT_SIZE,
  BPV_TABLE_SIZE,
  BPV_PAGINATOR_ALIGNMENT
} from '../constants';

export type BPVSeverity = (typeof BPV_SEVERITY)[number];
export type BPVBadgeSize = (typeof BPV_BADGE_SIZE)[number];
export type BPVButtonSize = (typeof BPV_BUTTON_SIZE)[number];
export type BPVFormState = (typeof BPV_FORM_STATE)[number];
export type BPVOffcanvasSize = (typeof BPV_OFFCANVAS_LAYOUT_SIZE)[number];
export type BPVTableSize = (typeof BPV_TABLE_SIZE)[number];
export type BPVPaginatorAlignment = (typeof BPV_PAGINATOR_ALIGNMENT)[number];
