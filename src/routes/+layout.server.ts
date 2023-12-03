import { supabase } from "$lib/supabaseClient";

export async function load() {
    const { data: heroImagesData } = await supabase.from("hero_images").select();
    const { data: upcomingEventsData } = await supabase.from("upcoming_events").select();

    const { data: williamstonCityHallData } = await supabase
        .from('departments')
        .select('*')
        .eq('name', 'Williamston City Hall');

    const departmentIds = williamstonCityHallData?.map(dept => dept.id) || [];

    const { data: contactInfoData } = await supabase
        .from('contactinfo')
        .select('*')
        .in('department_id', departmentIds);

    // Assuming there's only one matching department
    const departmentData = williamstonCityHallData ? williamstonCityHallData[0] : null;
    const contactData = departmentData ? contactInfoData?.find(info => info.department_id === departmentData.id) : null;

    const footerinfo = {
        department: departmentData,
        contact: contactData
    };

    console.log(footerinfo);

    return {
        hero_images: heroImagesData ?? [],
        upcoming_events: upcomingEventsData ?? [],
        footerinfo
    };
}
