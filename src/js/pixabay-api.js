export async function fetchImages(query, perPage = 12) {
    const searchParams = new URLSearchParams({
        key: '44785846-fbfadd775113e3685d7630ccf',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: false,
        per_page: perPage,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;
    
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then((response) => {
            if (!response.length) {
                return response.hits;
            }
        })
        .catch((error) => console.log(error));
}