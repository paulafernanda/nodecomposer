const axios = require('axios')
const URL = `https://gist.githubusercontent.com/hfabio/514717af3461ced9947641d583c29581/raw/fb3d702f286952a169bf460826b0de1a16e89af3/data.json`

async function companyJson() {
    const response = await axios.get(`${URL}`)
    return response
}

const createCompany = (item) => ({
    code_id: item.id,
    business_name: item.business_name,
    suffix: item.suffix,
    industry: item.industry,
    catch_phrase: item.catch_phrase,
    bs_company_statement: item.bs_company_statement,
    logo: item.logo,
    type: item.type,
    phone_number: item.phone_number,
    full_address: item.full_address,
    latitude: item.latitude,
    longitude: item.longitude
})

async function getAllCompanies() {
    try{
        let resultado = await companyJson()
    
        const company = []
        for (item of resultado.data){
            company.push(createCompany(item))
        }
        return company
    } catch(error){
        console.error(`erro interno `, error)
    }    
}

const createDesktop = (item, business_name, code_id) => ({
    code_id: item.id,
    company_code_id: code_id,
    company_business_name: business_name,
    platform: item.platform,
    type: item.type,
    os: item.os,
    ip: item.ip
})

async function getAllDesktop() {
    let resultado = await companyJson()
    
    const total = []
    for (item of resultado.data){
        let business_name = item.business_name
        let code_id = item.id
        for (desktop of item.desktops){
            total.push(createDesktop(desktop, business_name, code_id))
        }
    }
    return total
}

const createContributors = (item, business_name, code_id) => ({
    company_code_id: code_id,
    company_business_name: business_name,
    firstName: item.firstName,
    lastName: item.lastName,
    title: item.title,
    jobTitle: item.jobTitle,
    age: item.age
})

async function getAllContributors() {
    let resultado = await companyJson()
    
    const total = []
    for (item of resultado.data){
        let business_name = item.business_name
        let code_id = item.id
        for (contributors of item.contributors){
            total.push(createContributors(contributors, business_name, code_id))
        }
    }
    return total
  }


module.exports = {
    getAllCompanies,
    getAllDesktop,
    getAllContributors
}