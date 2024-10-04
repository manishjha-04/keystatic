import { fileHeader } from "style-dictionary/utils";
import { setWith } from 'lodash';
import StyleDictionary from 'style-dictionary';

export const javascriptTokenMap: StyleDictionary.Formatter = ({
  dictionary,
  file,
}) => {
  const reference = {};

  dictionary.allTokens.forEach(token => {
    setWith(reference, token.path, `var(--${token.name})`, Object);
  });

  return (
    fileHeader({ file }) +
    `export const tokenSchema = ${JSON.stringify(reference, null, 2)};`
  );
};
