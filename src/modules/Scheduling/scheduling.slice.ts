import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { rowTypes } from "./scheduling.types";

export interface SchedulingSliceTypes {
  shortlistedRows: rowTypes[];
  rowData: rowTypes[];
}

const initialState: SchedulingSliceTypes = {
  shortlistedRows: [],
  rowData: [
    {
      siteId: 1,
      nssId: "IDUW102180",
      siteType: "OLA",
      lastWeekSchedule: "No",
      scheduleType: "System",
      lastTicketDate: "2023-01-01",
      currentTicketDate: "2024-01-01",
      lastActivityDone: "2024-04-02",
      statusSchedule: "None",
      alarm: false,
      kpi: true,
      mansoon: false,
      totalTaskComplete: "1",
      engineerAvailable: ["Rahul Gupta"],
      zone: "Ghaziabad",
      subZone: "Indrapuram",
      ticketAgingInDays: "25",
      standardFrequency: 2,
      engineerDomain: "RAN",
    },
    {
      siteId: 2,
      nssId: "IDUW103176",
      siteType: "OLA",
      lastWeekSchedule: "No",
      scheduleType: "System",
      lastTicketDate: "2023-02-01",
      currentTicketDate: "2024-02-01",
      lastActivityDone: "2024-04-02",
      statusSchedule: "None",
      alarm: true,
      kpi: false,
      mansoon: false,
      totalTaskComplete: "2",
      engineerAvailable: ["Rahul Gurujala"],
      zone: "Ghaziabad",
      subZone: "Old Ghaziabad",
      ticketAgingInDays: "12",
      standardFrequency: 2,
      engineerDomain: "Optics",
    },
    {
      siteId: 3,
      nssId: "IDUW101260",
      siteType: "Pre-Agg",
      lastWeekSchedule: "Yes",
      scheduleType: "On Demand",
      lastTicketDate: "2023-03-01",
      currentTicketDate: "2024-03-01",
      lastActivityDone: "2024-04-02",
      statusSchedule: "Pending",
      alarm: false,
      kpi: true,
      mansoon: false,
      totalTaskComplete: "3",
      engineerAvailable: ["Rahul Kulthe"],
      zone: "Ghaziabad",
      subZone: "Old Ghaziabad",
      ticketAgingInDays: "15",
      standardFrequency: 2,
      engineerDomain: "IP",
    },
    {
      siteId: 4,
      nssId: "IDUW101260",
      siteType: "RAN",
      scheduleType: "System",
      lastWeekSchedule: "Yes",
      lastTicketDate: "2023-04-01",
      currentTicketDate: "2024-04-01",
      lastActivityDone: "2024-04-02",
      statusSchedule: "Pending",
      alarm: false,
      kpi: false,
      mansoon: true,
      totalTaskComplete: "4",
      engineerAvailable: ["Rahul Kulthe", "Rahul Gurujala"],
      zone: "Ghaziabad",
      subZone: "Indrapuram",
      ticketAgingInDays: "5",
      standardFrequency: 2,
      engineerDomain: "IP",
    },
    {
      siteId: 5,
      nssId: "IDUW102375",
      siteType: "RAN",
      scheduleType: "On Demand",
      lastWeekSchedule: "Yes",
      lastTicketDate: "2023-05-01",
      currentTicketDate: "2024-05-01",
      lastActivityDone: "2024-04-02",
      statusSchedule: "Pending",
      alarm: true,
      kpi: false,
      mansoon: true,
      totalTaskComplete: "5",
      engineerAvailable: ["Rahul Gupta"],
      zone: "Ghaziabad",
      subZone: "Indrapuram",
      ticketAgingInDays: "2",
      standardFrequency: 2,
      engineerDomain: "RAN",
    },
  ],
};

export const schedulingSlice = createSlice({
  name: "schedulingSlice",
  initialState,
  reducers: {
    setShortlistedRowsAction: (state, action: PayloadAction<rowTypes[]>) => {
      state.shortlistedRows = action.payload;
    },
    setRowDataAction: (state, action: PayloadAction<rowTypes[]>) => {
      state.rowData = action.payload;
    },
  },
});

export const { setShortlistedRowsAction, setRowDataAction } =
  schedulingSlice.actions;

export default schedulingSlice.reducer;
