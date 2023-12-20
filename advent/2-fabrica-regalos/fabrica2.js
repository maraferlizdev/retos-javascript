function manufacture(gifts, materials) {
    const matchingGifts = [];
  
    for (const gift of gifts) {
      let isValidGift = true;
  
      for (const letter of gift) {
        if (!materials.includes(letter)) {
          isValidGift = false;
          break;
        }
      }
  
      if (isValidGift) {
        matchingGifts.push(gift);
      }
    }
  
    return matchingGifts;
  }
  
  // Ejemplos de uso
  const gifts = ['tren', 'oso', 'pelota'];
  const materials = 'tronesa';
  console.log(manufacture(gifts, materials)); // ["tren", "oso"]
  
  const gifts2 = ['juego', 'puzzle'];
  const materials2 = 'jlepuz';
  console.log(manufacture(gifts2, materials2)); // ["puzzle"]
  
  const gifts3 = ['libro', 'ps5'];
  const materials3 = 'psli';
  console.log(manufacture(gifts3, materials3)); // []
  