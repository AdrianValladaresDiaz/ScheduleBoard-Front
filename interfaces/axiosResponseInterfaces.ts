import { ProjectInfo } from "./index";

export interface AxiosUserProjectsGetResponse {
  error: boolean;
  message: ProjectInfo[];
}

export interface AxiosUserProjectPostResponse {
  error: boolean;
  message: ProjectInfo;
}

export interface AxiosProjectGetResponse {
  error: boolean;
  message: ProjectInfo;
}

export interface AxiosPingResponse {
  error: boolean;
  message: string;
}

export interface ScheduleBoardResponse {
  error: boolean;
  message: any;
}
