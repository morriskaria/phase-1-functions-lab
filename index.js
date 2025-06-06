// Function 1: Calculate distance from HQ in blocks
function distanceFromHqInBlocks(block) {
  const hq = 42; // Scuber's headquarters is on 42nd Street
  return Math.abs(block - hq); // Absolute value ensures distance is always positive
}

// Function 2: Calculate distance from HQ in feet (1 block = 264 feet)
function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

// Function 3: Calculate distance travelled in feet between two blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Function 4: Calculate fare price based on distance travelled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0; // Free sample for short distances
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate for distances over 2000 feet
  } else {
    return 'cannot travel that far'; // No rides over 2500 feet
  }
}