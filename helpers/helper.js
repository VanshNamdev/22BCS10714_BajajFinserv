exports.processData = (data) => {
    if (!Array.isArray(data)) return { is_success: false, message: "Invalid input format" };

    let numbers = [], alphabets = [];
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item.toUpperCase()); // Convert to uppercase
        }
    });

    // Find the highest alphabet (case insensitive, last in A-Z)
    let highestAlphabet = alphabets.length > 0 ? [alphabets.sort().pop()] : [];

    // Ensure highest alphabet is included in alphabets array
    if (highestAlphabet.length > 0 && !alphabets.includes(highestAlphabet[0])) {
        alphabets.push(highestAlphabet[0]);
    }

    return {
        is_success: true,
        user_id: "john_doe_17091999", // Replace dynamically if needed
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    };
};
