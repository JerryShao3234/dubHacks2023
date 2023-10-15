const getSongs = async (country) => {

    console.log("getting songs for country:", country.label)

    const response = await fetch(`http://127.0.0.1:5000/trending?country=${country.value}`, {
        method: 'GET',
    })
    const data = await response.json();
    return data;
}

export {getSongs};
