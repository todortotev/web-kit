
const extractPathFromURL = (url: string) : string => {
  if (url.indexOf('?') > 0) url = url.substring(0, url.indexOf('?'));

  if (url.endsWith('/c')) {
    return '/[slug]/c';
  } else if (url.endsWith('/b')) {
    return '/[slug]/b';
  } else if (url.endsWith('/v')) {
    return '/[slug]/v';
  } else if (url.endsWith('/p')) {
    return '/[slug]/p';
  }

  return url;
};

export default extractPathFromURL;


