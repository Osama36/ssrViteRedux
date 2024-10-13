import PageWrapper from "../components/PageWrapper";
import { Helmet } from "react-helmet";

function generateHead(data: any) {
  return `
      <title>${data.title}</title>
      <meta name="description" content="${data.description}" />
      <meta property="og:title" content="${data.title}" />
      <meta property="og:description" content="${data.description}" />
      <meta property="og:image" content="${data.image}" />
      <meta property="og:url" content="${data.url}" />
    `;
}

function SectorPage({ serverData }) {
  return (
    <PageWrapper>
     
      <h1>Sector Page</h1>

      {serverData && (
        <div>
          <h2>Server Data:</h2>
          <pre>{JSON.stringify(serverData, null, 2)}</pre>
        </div>
      )}
    </PageWrapper>
  );
}

// This function will be called on the server before rendering
SectorPage.getMetaInfo = async () => {
  // Simulate an API call promise
  const promise = new Promise<object>((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Argaam Macro - General Data - Macroeconmic Data",
        description:
          "This is the home page of general data macroecononmic data",
        image: "https://example.com/og-image.jpg",
        url: "https://example.com",
      });
    }, 2000);
  });
  const res = await promise;
  const headData = generateHead(res);
  return headData;
};

export default SectorPage;
