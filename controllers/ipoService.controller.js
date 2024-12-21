const axios = require('axios');
const { parseStringPromise } = require('xml2js');

const fetchIpoList = async (req, res, next) => {
    try {
        const apiUrl = 'https://linkintime.co.in/Initial_Offer/IPO.aspx/GetDetails';

        const { data } = await axios.post(apiUrl, {}, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const xmlData = data.d;
        const jsonData = await parseStringPromise(xmlData);

        const ipoList = jsonData.NewDataSet.Table.map(entry => ({
            id: entry.company_id[0],
            name: entry.companyname[0],
        }));

        return res.status(200).json({ message: 'IPO list fetched successfully', data: ipoList });
    } catch (error) {
        console.error('Error fetching IPO list from API:', error);
        throw new Error('Failed to fetch IPO list');
    }
};

module.exports = {
    fetchIpoList,
};
