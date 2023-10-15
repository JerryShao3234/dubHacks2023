const getSongs = async (country) => {
    country = country || 'US';

    console.log("getting songs for country:", country)

    const response = await fetch(`http://127.0.0.1:5000/trending?country=${country}`, {
        method: 'GET',
    })
    const data = await response.json();
    return data;
}

export {getSongs};
