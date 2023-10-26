/// <reference types="@emotion/react/types/css-prop" />

import 'little-state-machine'

declare module 'little-state-machine' {
  interface GlobalState {
    channel: string
    area: string
    kyositsu: string
    sei: string
    mei: string
    seikana: string
    meikana: string
    sex: string
    date: string
    birth_year: string
    birth_month: string
    birth_date: string
    grade: string
    postal_code: string
    region: string
    locality: string
    street_address: string
    extended_address?: string
    email: string
    phone: string
    school: string
    comment: string
  }
}
