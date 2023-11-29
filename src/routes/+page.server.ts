import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data: heroImagesData } = await supabase.from("hero_images").select();
    const { data: upcomingEventsData } = await supabase.from("upcoming_events").select();
    console.log(upcomingEventsData)
    return {
        hero_images: heroImagesData ?? [],
        upcoming_events: upcomingEventsData ?? [],
    };
}