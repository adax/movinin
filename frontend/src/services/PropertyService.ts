import axios from 'axios'
import Env from '../config/env.config'
import * as UserService from './UserService'
import * as movininTypes from 'movinin-types'

export const getProperties = (data: movininTypes.GetPropertiesPayload, page: number, size: number): Promise<movininTypes.Result<movininTypes.Property>> =>
  axios
    .post(
      `${Env.API_HOST}/api/frontend-properties/${page}/${size}}`,
      data
    ).then((res) => res.data)

export const getProperty = (id: string): Promise<movininTypes.Property> =>
  axios
    .get(
      `${Env.API_HOST}/api/property/${encodeURIComponent(id)}/${UserService.getLanguage()}`
    )
    .then((res) => res.data)

export const getBookingProperties = (keyword: string, data: movininTypes.GetBookingPropertiesPayload, page: number, size: number): Promise<movininTypes.Property[]> =>
  axios
    .post(
      `${Env.API_HOST}/api/booking-properties/${page}/${size}/?s=${encodeURIComponent(keyword)}`,
      data,
      { headers: UserService.authHeader() }
    )
    .then((res) => res.data)