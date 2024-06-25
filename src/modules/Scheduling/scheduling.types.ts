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
  scheduleType: "System" | "On Demand";
  currentTicketDate: string;
  lastActivityDone: string;
  statusSchedule: string;
  totalTaskComplete: string;
  engineerAvailable: Array<string>;
  engineerDomain: string;
  alarm: boolean;
  kpi: boolean;
  mansoon: boolean;
  zone: string;
  subZone: string;
  ticketAgingInDays: string | number;
  standardFrequency: number;
}
