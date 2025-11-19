export const load = async ({fetch}) =>{
    const response = await fetch('/bears');
    const bears = await response.json();

    return {
        bears
    };
}