/**
 * Specifies spacing between two elements
 *
 * When defining spacing constants for the margins between elements, we can adopt a mathematic approach.
 * Using a spacingFactor constant, we can generate a set of distances based on a common factor.
 * This approach ensures that we have logical and consistent spacing between elements.
 */

const spacingFactor = 8;

function computeGoldenRatio(spacingFactor, exp) {
  return Math.round(spacingFactor * Math.pow(1.618, exp));
}

export default {
  space0: `${computeGoldenRatio(spacingFactor, 0)}px`, // 8
  space1: `${computeGoldenRatio(spacingFactor, 1)}px`, // 13
  space2: `${computeGoldenRatio(spacingFactor, 2)}px`, // 21
  space3: `${computeGoldenRatio(spacingFactor, 3)}px`, // 34
  space4: `${computeGoldenRatio(spacingFactor, 4)}px`, // 55
  space5: `${computeGoldenRatio(spacingFactor, 5)}px`, // 89
};
