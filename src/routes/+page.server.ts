import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data } = await supabase.from("hero_images").select();
    return {
        hero_images: data ?? [],
    };
}