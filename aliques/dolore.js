// Define the mapping object
const timezoneMapping = {
    'Asia/Rangoon': 'Asia/Yangon'
};

// Function to get the updated timezone
function getUpdatedTimezone(oldTimezone) {
    return timezoneMapping[oldTimezone] || oldTimezone;
}

// Example usage
let oldTimezone = 'Asia/Rangoon';
let newTimezone = getUpdatedTimezone(oldTimezone);

console.log(newTimezone); // Output: 'Asia/Yangon'

// If the timezone does not need to be updated, it will return the same value
let anotherTimezone = 'America/New_York';
console.log(getUpdatedTimezone(anotherTimezone)); // Output: 'America/New_York'
