export const get = (url: string) => {
  return <T>(defaultValue: T) => fetch(url, { method: "GET" })
    .then((result) => result.ok ? result.json() : { data: defaultValue })
    .then((resultData) => resultData.data)
    .catch((error) => {
      console.log(error);
      return { data: defaultValue };
    })
};