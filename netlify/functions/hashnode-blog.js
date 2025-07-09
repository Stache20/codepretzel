// netlify/functions/hashnode-blog.js

exports.handler = async function(event, context) {
    const HASHNODE_ACCESS_TOKEN = process.env.HASHNODE_ACCESS_TOKEN;
  
    // Parse the query from the request body (POST)
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (e) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid request body" }),
      };
    }
  
    const response = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": HASHNODE_ACCESS_TOKEN,
        "Accept": "application/json",
      },
      body: JSON.stringify({ query: body.query }),
    });
  
    const data = await response.text();
  
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: data,
    };
  };