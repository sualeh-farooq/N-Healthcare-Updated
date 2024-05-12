import { createServerClient, type CookieOptions, serialize } from '@supabase/ssr'
import { type GetServerSidePropsContext } from 'next'

export function createClient(context: GetServerSidePropsContext) {
  const supabase = createServerClient(
 'https://adjkbaqvoxmzorgmrees.supabase.co',
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkamtiYXF2b3htem9yZ21yZWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NzgxNTIsImV4cCI6MjAyNjM1NDE1Mn0.HXDGP9uxjGMsh5IrO5w12HHqxS31yTHUsKGOhKlcHZM',
    {
      cookies: {
        get(name: string) {
          return context?.req?.cookies[name]; // Ensure context.req exists before accessing its properties
        },
        set(name: string, value: string, options: CookieOptions) {
          context.res.setHeader('Set-Cookie', serialize(name, value, options))
        },
        // remove(name: string, options: CookieOptions) {
        //   context.res.setHeader('Set-Cookie', serialize(name, '', options))
        // },
        remove(name: string, options: CookieOptions) {
          context.res.setHeader('Set-Cookie', serialize(name, '', { ...options, expires: new Date(0) }));
        },
      },
    }
  )

  return supabase
}