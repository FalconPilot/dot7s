import { AxiosRequestConfig } from 'axios'

export type ValidQSParam = boolean | string | string[] | number | number[]

export interface QSParams {
  [k: string]: ValidQSParam
}

export interface ApiHandler<RequestResponse> {
  withOptions: (options: AxiosRequestConfig) => ApiHandler<RequestResponse>
  withBody: <BodyType>(body: BodyType) => ApiHandler<RequestResponse>
  withHeaders: (headers: Record<string, string>) => ApiHandler<RequestResponse>
  withQS: (qs: QSParams) => ApiHandler<RequestResponse>
  execute: () => Promise<RequestResponse>
}

export type ApiRequest<RequestResponse> = ApiHandler<RequestResponse>['execute']
