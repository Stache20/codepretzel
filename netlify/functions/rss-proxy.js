// netlify/functions/rss-proxy.js

exports.handler = async function(event, context) {
  const rssUrl = 'https://webpretzl.hashnode.dev/rss.xml';

  try {
    const response = await fetch(rssUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
      }
    });
    const text = await response.text();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/rss+xml',
        'Access-Control-Allow-Origin': '*',
      },
      body: text,
    };
  } catch (error) {
    console.error("RSS Proxy Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
