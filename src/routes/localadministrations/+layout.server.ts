import { supabase } from "$lib/supabaseClient";

export async function load() {
    // Initialize an object to store all administrations and their details
    let localadministration = {};

    // Fetch all local administrations
    const { data: administrationsData, error: adminError } = await supabase
        .from('localadministrations')
        .select('*');

    // Check for an error and make sure administrationsData is an array before iterating
    if (adminError) {
        console.error('Error fetching local administrations:', adminError);
        return { localadministration }; // Return early with an empty object on error
    }

    if (Array.isArray(administrationsData)) {
        for (const admin of administrationsData) {
            // Fetch all board members for the current administration
            const { data: boardMembersData, error: membersError } = await supabase
                .from('boardmembers')
                .select('*')
                .eq('administration_id', admin.id);

            // Check for an error when fetching board members
            if (membersError) {
                console.error(`Error fetching board members for administration ${admin.id}:`, membersError);
                continue; // Skip this administration on error
            }

            // Add the board members to their respective administration
            localadministration[admin.name] = {
                description: admin.description,
                board_members: boardMembersData,
            };
        }
    } else {
        console.error('Administrations data is not an array:', administrationsData);
    }

    // You can add additional data fetches here if needed and include them in the return object below
    return {
        localadministration
    };
}
