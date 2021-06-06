export interface GetUrlOptionsReturn {
  offset: number;
  limit: number;
}

export const getUrlOptions = (
  url: string | null = '',
): GetUrlOptionsReturn | null => {
  if (!url) return null;

  const mOffset = url.match(/offset=\d+/);
  const mOffsetNumber = mOffset ? mOffset[0].match(/\d+/) : null;
  const offset = mOffsetNumber ? Number(mOffsetNumber[0]) : 0;

  const mLimit = url.match(/limit=\d+/);
  const mLimitNumber = mLimit ? mLimit[0].match(/\d+/) : null;
  const limit = mLimitNumber ? Number(mLimitNumber[0]) : 0;

  return { offset, limit };
};

export const getValueWithinLimits = (
  value: number,
  min: number,
  max: number,
) => {
  if (value < min) return min;
  if (value > max) return max;

  return value;
};
