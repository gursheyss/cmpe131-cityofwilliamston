import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data: heroImagesData } = await supabase.from("hero_images").select();
    const { data: upcomingEventsData } = await supabase.from("upcoming_events").select();

    const { data: departmentsData } = await supabase
        .from('departments')
        .select('id, name, department_details (key, value)');

    const departments = departmentsData?.map(dept => ({
        id: dept.id,
        name: dept.name,
        details: dept.department_details.reduce((detailsObj, detail) => ({
            ...detailsObj,
            [detail.key]: detail.value
        }), {})
    })) ?? [];

    return {
        hero_images: heroImagesData ?? [],
        upcoming_events: upcomingEventsData ?? [],
        departments
    };
}
