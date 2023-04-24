const axios = require('axios')
const searchArray = require("./search")

const get5Places = async (text) => {

    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${text}&language=iw&key=AIzaSyCAHJLlEGCXSL2wQP_Ao2M_WAsELYBvzIk`
    )
    const nearby5Places = data.results.slice(0, 5)
    const formatForResult = nearby5Places.map((n) => {
        return { name: n.name, address: n.formatted_address, location: n.geometry.location ,photos:n.photos?n.photos[0]:null }
    })

    await saveSearchText(text);
    return formatForResult;

}

const get5PlacesByDistance = async (text,radius) => {

    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${text}&language=iw&key=AIzaSyCAHJLlEGCXSL2wQP_Ao2M_WAsELYBvzIk`
    )
    const nearby5Places = data.results.slice(0, 5)
    const formatForResult = nearby5Places.map((n) => {
        return { name: n.name, address: n.formatted_address, location: n.geometry.location ,photos:n.photos?n.photos[0]:null }
    })

    await saveSearchText(text);
    return formatForResult;

}



const saveSearchText = async (searchText) => {
    const searchTextExist = await searchArray.searches.find(s => s.searchName == searchText)
    if (searchTextExist) {
        searchTextExist.counter++;
    } else {
        const saveSearch = {
            searchName: searchText,
            counter: 1,
        }
        searchArray.searches.push(saveSearch);
    }
}


const getPopulerSearch = () => {
    let max = 1;
        let name = "";
        for (let i = 0; i < searchArray.searches.length; i++) {
            const element = searchArray.searches[i];
            if (element.counter > max) {
                max = element.counter
                name = element.searchName
            }
        }
        return name;
    
};

module.exports = { get5Places, getPopulerSearch }
