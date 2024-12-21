const axios = require('axios');


const checkAllotmentForPan = async (ipoId, panNumber) => {
    try {
        const payload = {
            clientid: ipoId,
            PAN: panNumber,
            IFSC: '',
            CHKVAL: '1',
            token: '',
        };

        const ALLOTMENT_API_URL = 'https://linkintime.co.in/Initial_Offer/IPO.aspx/SearchOnPan';

        const response = await axios.post(ALLOTMENT_API_URL, payload);
        const responseData = response?.data?.d;

        if (responseData && responseData.includes('<match>Y</match>')) {
            return 'Allotted';
        } else {
            return 'Not Allotted';
        }
    } catch (error) {
        console.error(`Error checking allotment for PAN: ${panNumber}`, error.message);
        return 'Invalid';
    }
};

module.exports = { checkAllotmentForPan };