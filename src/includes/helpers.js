/**
 * Generates a unique Japan Rail like confirmation code for bookings.
 * @returns {string} A unique confirmation code.
 */
const generateConfirmationCode = () => {
    return 'JR' + Math.random().toString(36).substring(2, 10).toUpperCase();
};

/**
 * Converts kilometers to miles.
 * @param {number} km - The distance in kilometers.
 * @returns {number} The equivalent distance in miles.
 */
const kmToMiles = (km) => {
    const conversionFactor = 0.621371;
    return km * conversionFactor;
};

/**
 * Converts Japanese Yen to US Dollars.
 * @param {number} yen - The amount in Japanese Yen.
 * @returns {number} The equivalent amount in US Dollars.
 */
const yenToUsd = (yen) => {
    const exchangeRate = 0.0066; // Example rate: 1 Yen = 0.0066 USD
    return yen * exchangeRate;
};

/**
 * Converts operating schedule numbers to the corresponding month abbreviation.
 *  
 * 
 */
const numsToMonth = (month) => {
    switch(month){
        case 1:
            month = 'Jan';
            return month;
        case 2:
            month = 'Feb';
            return month;
        case 3:
            month = 'Mar';
            return month;
        case 4:
            month = 'Apr';
            return month;
        case 5:
            month = 'May';
            return month;
        case 6:
            month = 'Jun';
            return month;
        case 7:
            month = 'Jul';
            return month;
        case 8:
            month = 'Aug';
            return month;
        case 9:
            month = 'Sep';
            return month;
        case 10:
            month = 'Oct';
            return month;
        case 11:
            month = 'Nov';
            return month;
        case 12:
            month = 'Dec';
            return month;
    }
};

export { generateConfirmationCode, kmToMiles, yenToUsd, numsToMonth };

