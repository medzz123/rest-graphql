export const convertGraphqlToRest = (graphqlQuery: string) => {
  const convert = transform(graphqlQuery);

  return JSON.stringify(convert);
};

const transform = (text: string) => {
  return text.replace(/[\s,]+/g, ' ').trim();
};
