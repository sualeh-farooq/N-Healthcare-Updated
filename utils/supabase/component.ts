
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabase = createBrowserClient(
    'https://adjkbaqvoxmzorgmrees.supabase.co' ,
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkamtiYXF2b3htem9yZ21yZWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NzgxNTIsImV4cCI6MjAyNjM1NDE1Mn0.HXDGP9uxjGMsh5IrO5w12HHqxS31yTHUsKGOhKlcHZM',
  )

  return supabase
}