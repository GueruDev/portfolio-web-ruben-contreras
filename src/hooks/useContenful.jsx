import { createClient } from "contentful";

export const useContentful = () => {

  const accessToken = import.meta.env.VITE_REACT_APP_CONTENT_PREVIEW_API_ACCESS_TOKEN;
  const spaceID =  import.meta.env.VITE_REACT_APP_CONTENTFUL_SPACE_ID;

  const client = createClient({
    space: spaceID,
    accessToken: accessToken,
    host: "preview.contentful.com",
    environment: 'master',
  });

  const getUsers = async () => {

    try {
      const data = await client.getEntries({
        content_type: "author",
        select: "fields"
      });
      const sanitizedData = data.items.map((item) => {
        return {
          ...item.fields    
        };
      }); 
      return sanitizedData;
    } catch (error) {
      console.log(`Error fetching users ${error}`);
    }

  };
  return { getUsers };
};
