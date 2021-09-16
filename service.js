const axios = require('axios')
const URL = `https://gist.githubusercontent.com/hfabio/514717af3461ced9947641d583c29581/raw/fb3d702f286952a169bf460826b0de1a16e89af3/data.json`

async function companyJson() {
    const response = await axios.get(`${URL}`)
    return response
}

async function getAllCompany() {
    try{
        const result = await companyJson()
        const companys = result.data.map((item) => item.business_name)
        return companys
    } catch(error){
        console.error(`erro interno `, error)
    }

}

async function getDesktops(idcompany) {
    try{
        const result = await companyJson()
        const empresa = result.data.filter((item) => {
            const final = item.id === idcompany
            return final
        })
        
        return empresa[0].desktops
    } catch(error){
        console.error(`erro interno `, error)
    }

}

async function getContributors(idcompany) {
    try{
        const result = await companyJson()
        const empresa = result.data.filter((item) => {
            const final = item.id === idcompany
            return final
        })
        
        return empresa[0].contributors
    } catch(error){
        console.error(`erro interno `, error)
    }

}

async function getAllDesktops() {
    try{
        const result = await companyJson()
        const desktops = result.data.map((item) => item.desktops)
        // {
        //     return `${item.desktops}`
        //     //return `${item.desktops[0].type} - ${item.desktops[0].platform} - ${item.desktops[0].ip}`
        // })
        return desktops
    } catch(error){
        console.error(`erro interno `, error)
    }

}

module.exports = {
    getAllCompany,
    getAllDesktops,
    getDesktops,
    getContributors
}