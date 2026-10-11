export const SITE_NAME = 'Gifts N Presents'
export const SITE_URL = String(
  import.meta.env.VITE_SITE_URL ?? 'https://giftsnpresents.com',
).replace(/\/$/, '')

export const DEFAULT_DESCRIPTION =
  'Diwali gift hampers packed to order in Ahmedabad. Ready-made boxes, custom hampers, and festive treats. Enquire on Instagram or email. We do not sell from this site.'

export const OG_IMAGE_PATH = '/og.jpg'
