import Head from "next/head";

const MetaData = () => {
  return (
    <Head>
      <title>Chat-CV - Your Interactive CV for Recruiters</title>
      <meta
        name="description"
        content="Chat-CV offers an interactive and engaging CV experience, designed specifically for recruiters and hiring managers. Connect with opportunities in a dynamic new way!"
      />
      <meta
        name="keywords"
        content="chat-cv, interactive CV, recruiters, hiring managers, job seeking, career advancement, innovative portfolio"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/assets/images/favicon.svg?qureyr=2"
      />
      <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default MetaData;
