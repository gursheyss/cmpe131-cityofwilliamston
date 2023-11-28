import { createClient } from '@supabase/supabase-js'
import { DB_ANON_KEY, DB_PROJECT_URL } from '$env/static/private'

const options = {
    withCredentials: true
}

export const supabase = createClient(DB_PROJECT_URL, DB_ANON_KEY)