/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import Job from "./constants/Job";

export type RootStackParamList = {
  Home: undefined;
  Timer: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Meet: undefined;
  Lane: undefined;
  Timer: undefined;
};

export type TabOneParamList = {
  Meet: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export interface JobScan {
  meetId: string;
  job: Job;
}