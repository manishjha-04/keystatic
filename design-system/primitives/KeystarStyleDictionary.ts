import StyleDictionary from 'style-dictionary';

import {
  cssThemed,
  cssVariables,
  javascriptTokenMap,
  jsonFigma,
} from './formatters';
import { w3cJsonParser } from './parsers';
import {
  colorToCssAlpha,
  colorToHex,
  colorToHexAlpha,
  colorToRgbaFloat,
  cubicBezierToCss,
  dimensionToPixelUnitless,
  figmaAttributes,
  fontWeightToNumber,
  namePathToFigma,
  namePathToKebabCase,
  shadowDimensionToCssPartial,
  typographyToCapsize,
} from './transformers';

// Parsers
// -----------------------------------------------------------------------------

StyleDictionary.registerParser(w3cJsonParser);

// Formatters
// -----------------------------------------------------------------------------

StyleDictionary.registerFormat({
  name: 'css/themed',
  format: cssThemed,
});

StyleDictionary.registerFormat({
  name: 'css/variables',
  format: cssVariables,
});

StyleDictionary.registerFormat({
  name: 'javascript/token-map',
  format: javascriptTokenMap,
});

StyleDictionary.registerFormat({
  name: 'json/figma',
  format: jsonFigma,
});

// Transformers
// -----------------------------------------------------------------------------

StyleDictionary.registerTransform({
  name: 'color/hex',
  ...colorToHex,
});

StyleDictionary.registerTransform({
  name: 'color/hexAlpha',
  ...colorToHexAlpha,
});

StyleDictionary.registerTransform({
  name: 'color/rgbaFloat',
  ...colorToRgbaFloat,
});

StyleDictionary.registerTransform({
  name: 'color/cssAlpha',
  ...colorToCssAlpha,
});

StyleDictionary.registerTransform({
  name: 'cubicBezier/css',
  ...cubicBezierToCss,
});

StyleDictionary.registerTransform({
  name: 'dimension/pixelUnitless',
  ...dimensionToPixelUnitless,
});

StyleDictionary.registerTransform({
  name: 'figma/attributes',
  ...figmaAttributes,
});

StyleDictionary.registerTransform({
  name: 'fontWeight/number',
  ...fontWeightToNumber,
});

StyleDictionary.registerTransform({
  name: 'name/pathToFigma',
  ...namePathToFigma,
});

StyleDictionary.registerTransform({
  name: 'name/pathToKebabCase',
  ...namePathToKebabCase,
});

StyleDictionary.registerTransform({
  name: 'dimension/shadowToCssPartial',
  ...shadowDimensionToCssPartial,
});

StyleDictionary.registerTransform({
  name: 'typography/capsize',
  ...typographyToCapsize,
});

/**
 * @name {@link KeystarStyleDictionary}
 * @description Returns style dictionary object with Keystar preset parsers, formatters and transformers.
 */
export const KeystarStyleDictionary: StyleDictionary.Core = StyleDictionary;
