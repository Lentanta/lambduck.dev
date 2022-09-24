
export const queryNotionDatabase = async (databaseId: string, bodyParams?: any) => {
  try {
    const headers = {
      "Authorization": `${process.env.NOTION_TOKEN}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    };
    const notionResponse = await fetch(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(bodyParams)
      })
    const { results } = await notionResponse.json();
    return results;
  } catch (error) {
    return [];
  }
};

