const getSongs = async (country) => {
    country = country || 'US';
    const response = await fetch(`http://127.0.0.1:5000/trending?country=${country}`)
    const data = await response.json();
    return data;
}

export {getSongs};
