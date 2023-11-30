const seededRandom = (seed) => {
    const modulus = 2 ** 35 - 31;
    const multiplier = 185852;
    let state = seed % modulus;
    return () => (state = (state * multiplier) % modulus) / modulus;
};

export function fetchAPI(date) {
    const result = [];
    const currentDate = new Date(date);
    const seed = currentDate.getDate();
    const getRandom = seededRandom(seed);
    for (let hour = 17; hour <= 23; hour++) {
      if (getRandom() < 0.5) result.push(`${hour}:00`);
      if (getRandom() < 0.5) result.push(`${hour}:30`);
    }
    return result;
}

