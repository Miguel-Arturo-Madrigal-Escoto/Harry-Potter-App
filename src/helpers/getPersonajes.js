export const getPersonajes = async ( link, id ) => {
    const url = link + id;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}
