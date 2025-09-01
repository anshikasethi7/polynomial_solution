// Sample input data with roots and encoded coefficients
const jsonData = {
  roots: [2, 3],  // The two roots of the polynomial f(x)
  aBase: "5",     // Encoded value for coefficient 'a'
  bBase: "7"      // Encoded value for coefficient 'b' (may or may not be used)
};

// Function to decode the encoded coefficient values
// Right now, it just converts them to numbers directly
// Update this if your inputs use a special base or format
function decodeBaseValue(encoded) {
  return Number(encoded);
}

// Calculate a, b, and c for the quadratic polynomial f(x) = ax² + bx + c
// where the roots r1 and r2 satisfy f(x) = a(x - r1)(x - r2)
// - a is decoded from input
// - b is calculated using Vieta's formula: b = -a * (r1 + r2)
// - c is calculated as: c = a * r1 * r2
function computeCoefficients({ roots, aBase, bBase }) {
  const [r1, r2] = roots;            // Extract roots
  const a = decodeBaseValue(aBase);  // Decode coefficient a
  const bDecoded = decodeBaseValue(bBase); // Decode coefficient b if needed

  const b = -a * (r1 + r2);          // Calculate b using the roots and a
  const c = a * r1 * r2;             // Calculate c (constant term)

  return { a, bDecoded, b, c };
}

// Run the computation and output results
const result = computeCoefficients(jsonData);

console.log("Decoded coefficients:");
console.log("a =", result.a);           // Output decoded a
console.log("b (decoded) =", result.bDecoded); // Output decoded b (from input)
console.log("b (computed) =", result.b);        // Output calculated b from roots and a
console.log("c =", result.c);             // Output constant term c
