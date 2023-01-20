const headers = {
  "Authorization": `${process.env.NOTION_TOKEN}`,
  "Content-Type": "application/json",
  "Notion-Version": "2022-06-28",
};

export const retrieveNotionDB = async (databaseId: string) => {
  const api = `https://api.notion.com/v1/databases/${databaseId}`;
  const requestBody = {
    headers,
    method: "GET"
  };

  try {
    const notionResponse = await fetch(api, requestBody);
    const resultData = await notionResponse.json();
    return resultData;

  } catch (error) {
    return [];
  }
};

export const queryNotionDB = async (
  databaseId: string,
  bodyParams?: any
) => {
  const api = `https://api.notion.com/v1/databases/${databaseId}/query`;
  const requestBody = {
    headers,
    method: "POST",
    body: JSON.stringify(bodyParams)
  };

  try {
    const notionResponse = await fetch(api, requestBody);
    const { results } = await notionResponse.json();
    return results;

  } catch (error) {
    return [];
  }
};

