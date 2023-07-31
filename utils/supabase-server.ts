// Supabase Client
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '../utils/database.types'

export const createClient = () =>
  createServerComponentClient<Database>({
    cookies,
  })
