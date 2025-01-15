export const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"]

export const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export const years = Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - 10 + i)
