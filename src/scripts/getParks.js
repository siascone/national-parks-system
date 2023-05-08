const getParks = async () => {
    let fetchParks = await fetch('https://developer.nps.gov/api/v1/parks?limit=469&api_key=l5gqtNnz6NdndT4be4PEiQaCwVjE0KmhGfmaNG1y')

    let parkData = await fetchParks.json()
    let parks = {}
    // debugger
    for (let i = 0; i < parkData.data.length; i++) {
        let  park = parkData.data[i];
        parks[park.id] = park
    }

    return parks
}

export default getParks;