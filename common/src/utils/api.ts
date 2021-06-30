import * as t from 'io-ts'
import * as qs from 'query-string'
import axios, { AxiosRequestConfig } from 'axios'

import { ApiHandler } from '$common/api/types'

import { extractOrThrow } from './either'

// API Handler
const apiHandler = (config: AxiosRequestConfig) => <RequestResponse>(
  url: string,
  codec: t.Type<RequestResponse, unknown, unknown>
): ApiHandler<RequestResponse> => ({
    withOptions: options => apiHandler({ ...config, ...options })(url, codec),
    withHeaders: headers =>
      apiHandler({
        ...config,
        headers: {
          ...config.headers,
          ...headers
        }
      })(url, codec),
    withBody: body => apiHandler({ ...config, data: body })(url, codec),
    withQS: params =>
      apiHandler({
        ...config,
        params,
        paramsSerializer: p => qs.stringify(p, { skipEmptyString: true })
      })(url, codec),
    execute: () =>
      axios
        .request<unknown>({ ...config, url })
        .then(res => codec.asDecoder().decode(res.data))
        .then(extractOrThrow)
  })

// API methods
export const API = {
  delete: apiHandler({ method: 'DELETE' }),
  get: apiHandler({ method: 'GET' }),
  patch: apiHandler({ method: 'PATCH' }),
  post: apiHandler({ method: 'POST' }),
  put: apiHandler({ method: 'PUT' })
}

