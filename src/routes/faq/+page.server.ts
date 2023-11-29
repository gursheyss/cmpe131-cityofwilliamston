import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data } = await supabase.from("faqs").select();

    console.log(data)
    return {
        faq: data ?? [],
    };
}
