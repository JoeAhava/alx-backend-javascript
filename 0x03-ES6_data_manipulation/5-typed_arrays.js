export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer, 0);
    view.setInt8(position, value);
    // buffer[position] = view;
    return view;
  } catch (err) {
    throw new Error('Position outside range');
  }
}
