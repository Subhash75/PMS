export interface ActionButtonProps {
  data: any;
  onSubmit: (data: any) => void;
}

export interface rowTypes {
  siteId: number;
  nssId: string;
  siteType: string;
  lastTicketDate: string;
  lastWeekSchedule: string;
  currentTicketDate: string;
  lastActivityDone: string;
  statusSchedule: string;
  totalTaskComplete: string,
  engineerAvailable: Array<string>,
  engineerDomain: string,
  alarm: boolean;
  kpi: boolean;
  mansoon: boolean;
}