// import { createServerClient, type CookieOptions, serialize } from '@supabase/ssr'
// import { type NextApiRequest, type NextApiResponse } from 'next'

// export default function createClient(req: NextApiRequest, res: NextApiResponse) {
//   const supabase = createServerClient(
//     'https://adjkbaqvoxmzorgmrees.supabase.co',
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkamtiYXF2b3htem9yZ21yZWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NzgxNTIsImV4cCI6MjAyNjM1NDE1Mn0.HXDGP9uxjGMsh5IrO5w12HHqxS31yTHUsKGOhKlcHZM',
//     {
//       cookies: {
//         get(name: string) {
//           return req.cookies[name]
//         },
//         set(name: string, value: string, options: CookieOptions) {
//           res.appendHeader('Set-Cookie', serialize(name, value, options))
//         },
//         remove(name: string, options: CookieOptions) {
//           res.appendHeader('Set-Cookie', serialize(name, '', options))
//         },
//       },
//     }
//   )

//   return supabase
// }

import { createServerClient, type CookieOptions, serialize } from '@supabase/ssr'
import { type NextApiRequest, type NextApiResponse } from 'next'

export default function createClient(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createServerClient(
    'https://adjkbaqvoxmzorgmrees.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkamtiYXF2b3htem9yZ21yZWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NzgxNTIsImV4cCI6MjAyNjM1NDE1Mn0.HXDGP9uxjGMsh5IrO5w12HHqxS31yTHUsKGOhKlcHZM',
    {
      cookies: {
        get(name: string) {
          return req.cookies[name]
        },
        set(name: string, value: string, options: CookieOptions) {
          res.setHeader('Set-Cookie', serialize(name, value, options))
        },
        remove(name: string, options: CookieOptions) {
          res.setHeader('Set-Cookie', serialize(name, '', options))
        },
      },
    }
  )

  return supabase
}
