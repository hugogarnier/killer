/**
 * @description Method to compute height by ratio
 * @param {number} sourceWidth - The source width used to compute ratio
 * @param {number} sourceHeight - The source height used to compute ratio
 * @return {number} The height computed
 */
export const computeHeightByRatio = (
  sourceWidth: number,
  sourceHeight: number,
  width: number | string,
): number | string => {
  if (typeof width === 'string' && isNaN(Number(width))) {
    return width;
  }
  const ratio = sourceHeight / sourceWidth;
  const height = Number(width) * ratio;
  return height;
};

/**
 * @description Method to compute height by ratio
 * @param {number} sourceWidth - The source width used to compute ratio
 * @param {number} sourceHeight - The source height used to compute ratio
 * @return {number} The height computed
 */
export const computeWidthByRatio = (
  sourceWidth: number,
  sourceHeight: number,
  height: number | string,
): number | string => {
  if (typeof height === 'string' && isNaN(Number(height))) {
    return height;
  }
  const ratio = sourceWidth / sourceHeight;
  const width = Number(height) * ratio;
  return width;
};
