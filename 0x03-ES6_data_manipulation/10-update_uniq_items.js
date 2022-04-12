export default function updateUniqueItems(map) {
  try {
    map.forEach((v, k) => {
      if (v === 1) map.set(k, 100);
      else map.set(k, v);
    });
  } catch (err) {
    throw new Error('Cannot process');
  }
}
