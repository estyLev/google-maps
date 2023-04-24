const jfiles = require("jsonfile");
const searchtModel = require("../models/searchModel");
const axios = require('axios')

const get5Places = async (text) => {

    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${text}&language=iw&key=AIzaSyCAHJLlEGCXSL2wQP_Ao2M_WAsELYBvzIk`
    )
    const nearby5Places = data.results.slice(0, 5)
    const formatForResult = nearby5Places.map((n) => {
        return { name: n.name, address: n.formatted_address, location: n.geometry.location,photos:n.photos?n.photos[0]:null }
    })

    await saveSearchText(text);
    return formatForResult;

}



const saveSearchText = async (searchText) => {
    const searchTextExist = await searchtModel.findOne({ place: searchText })
    if (searchTextExist) {
        await searchModel.findOneAndUpdate(
            { search: searchText },
            { counter: searchTextExist.counter + 1 },
        )
    } else {
        const saveSearch = new searchModel({
            search: searchText,
            counter: 1,
        })
        await saveSearch.save()
    }
}


const getPopulerSearch = () => {
    return new Promise((resolve, reject) => {

        searchtModel.findOne().sort({
            counter: 'desc', function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }
        });
    });
};

module.exports = { get5Places, getPopulerSearch }
