import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HASHNODE_USERNAME = "StefanStahuber";


function Blog() {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postsToShow, setPostsToShow] = useState(10);
  const [debugInfo, setDebugInfo] = useState([]);

  useEffect(() => {
    fetchAllPosts();
  }, []);

  useEffect(() => {
    // Update displayed posts when allPosts or postsToShow changes
    setDisplayedPosts(allPosts.slice(0, postsToShow));
  }, [allPosts, postsToShow]);

  const addDebugInfo = (message, data = null) => {
    const timestamp = new Date().toLocaleTimeString();
    const debugEntry = { timestamp, message, data };
    console.log(`[${timestamp}] ${message}`, data);
    setDebugInfo(prev => [...prev, debugEntry]);
  };

  const testRSSFeed = async () => {
    addDebugInfo("🔍 Testing RSS feed via Netlify proxy");
  
    try {
      const response = await fetch('/.netlify/functions/rss-proxy');
  
      addDebugInfo(`Proxy RSS response status: ${response.status}`, {
        ok: response.ok,
        statusText: response.statusText,
      });
  
      if (response.ok) {
        const text = await response.text();
        addDebugInfo("RSS feed content preview", text.substring(0, 500));
        return { success: true, content: text };
      }
    } catch (err) {
      addDebugInfo("RSS proxy access failed", err.message);
    }
  
    return { success: false };
  };
  

  const testGraphQLAPI = async () => {
    addDebugInfo("\ud83d\udd0d Testing GraphQL API via Netlify function");
    // First, test a simple query to verify authentication
    const testQuery = `
      query {
        me {
          id
          username
          name
        }
      }
    `;
    try {
      addDebugInfo("Testing authentication with simple query");
      const testResponse = await fetch('/.netlify/functions/hashnode-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: testQuery }),
      });
      addDebugInfo(`Authentication test status: ${testResponse.status}`);
      if (testResponse.ok) {
        const testData = await testResponse.json();
        addDebugInfo("Authentication test response", testData);
        if (testData.data?.me) {
          addDebugInfo("\u2705 Authentication successful!", testData.data.me);
        } else if (testData.errors) {
          addDebugInfo("\u274C Authentication failed", testData.errors);
          return { success: false, authError: true };
        }
      } else {
        const errorText = await testResponse.text();
        addDebugInfo("Authentication test error", errorText);
        return { success: false, authError: true };
      }
    } catch (err) {
      addDebugInfo("Authentication test failed", err.message);
      return { success: false, authError: true };
    }
    // Now try the posts query
    const postsQuery = `
      query {
        user(username: "${HASHNODE_USERNAME}") {
          publications(first: 1) {
            edges {
              node {
                id
                title
                posts(first: 10) {
                  edges {
                    node {
                      id
                      title
                      slug
                      publishedAt
                      brief
                      coverImage {
                        url
                      }
                      author {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
    try {
      addDebugInfo("Testing posts query");
      addDebugInfo("Posts query being sent:", postsQuery);
      const response = await fetch('/.netlify/functions/hashnode-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: postsQuery }),
      });
      const data = await response.json();
      addDebugInfo("Posts query response", data);
      if (data.data?.user?.publications?.edges) {
        const allPosts = [];
        data.data.user.publications.edges.forEach(publicationEdge => {
          const publication = publicationEdge.node;
          if (publication.posts?.edges) {
            publication.posts.edges.forEach(postEdge => {
              const post = postEdge.node;
              allPosts.push({
                title: post.title,
                link: `https://webpretzl.hashnode.dev/${post.slug}`,
                pubDate: post.publishedAt,
                description: post.brief,
                coverImage: post.coverImage.url,
                author: post.author?.name || "Stefan Stahuber"
              });
            });
          }
        });
        if (allPosts.length > 0) {
          addDebugInfo("Successfully extracted posts", allPosts);
          return { success: true, posts: allPosts };
        }
      }
      if (data.errors) {
        addDebugInfo("Posts query errors", data.errors);
      }
    } catch (err) {
      addDebugInfo("Posts query test failed", err.message);
    }
    return { success: false };
  };

  

  const fetchAllPosts = async () => {
    try {
      setLoading(true);
      setDebugInfo([]);
      addDebugInfo("🚀 Starting blog post fetch with Personal Access Token");
      addDebugInfo(`Target Hashnode username: ${HASHNODE_USERNAME}`);

      // Primary method: GraphQL API with Personal Access Token
      const graphqlResult = await testGraphQLAPI();
      
      // Fallback: Test RSS feed (but don't expect it to work due to CORS)
      const rssResult = await testRSSFeed();
      
      // Determine which method worked
      let posts = [];
      
      if (graphqlResult.success) {
        addDebugInfo("✅ GraphQL API worked!", graphqlResult.posts);
        posts = graphqlResult.posts.map(post => ({
          title: post.title,
          link: post.link,
          pubDate: post.pubDate,
          description: post.description,
          coverImage: post.coverImage,
          author: post.author
        }));
      } else {
        addDebugInfo("❌ GraphQL API failed");
        addDebugInfo("Summary:", {
          graphql: graphqlResult.success,
          rssFeed: rssResult.success
        });
      }

      // Sort posts by publish date (newest first)
      posts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      
      addDebugInfo("Final posts count", posts.length);
      setAllPosts(posts);
      setLoading(false);
    } catch (err) {
      addDebugInfo("❌ Critical error in fetchAllPosts", err.message);
      setError("Failed to load blog posts. Please try again later.");
      setLoading(false);
    }
  };

  const loadMorePosts = () => {
    setPostsToShow(prev => prev + 10);
  };

  const truncateText = (text, maxLength = 200) => {
    if (!text) return "No preview available.";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };


  if (loading) {
    return (
      <div style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ fontSize: "4rem", animation: "spin 2s linear infinite" }}>
          🥨
        </div>
        <h2 style={{ color: "#fff", marginTop: "2rem" }}>
          Knotting your pretzels...
        </h2>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
          `}
        </style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ backgroundColor: "#000000", minHeight: "100vh", marginTop: "-60px", paddingTop: "60px" }}>
        <Navbar />
        <div className="container" style={{ maxWidth: 900, margin: "2rem auto", padding: "0 1rem", textAlign: "center" }}>
          <h2>{error}</h2>
          <button 
            onClick={fetchAllPosts}
            style={{
              background: "#61dafb",
              color: "#000",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "1rem"
            }}
          >
            Try Again
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "Black", minHeight: "100vh", marginTop: "-60px", paddingTop: "60px" }}>
      <Navbar />
      <div className="container" style={{ maxWidth: 900, margin: "0 auto", padding: "3rem 1rem" }}>
        <h1 className="mb-2" style={{ 
          textAlign: "center", 
          marginBottom: "4rem",
          fontSize: "2rem",
          fontWeight: "700",
          color: "white",
          textShadow: "0 2px 10px rgba(255, 255, 255, 0.3)"
        }}>
          🥨 Knoteworthy Reads
        </h1>
        <br />
        
        {displayedPosts.length === 0 ? (
          <div style={{ textAlign: "center" }}>
            <p>No knoteworthy reads found yet.</p>
            <p style={{ fontSize: "0.9rem", color: "#aaa", marginTop: "1rem" }}>
              Check out my blog at{" "}
              <a href="https://webpretzl.hashnode.dev" target="_blank" rel="noopener noreferrer" style={{ color: "#61dafb" }}>
                webpretzl.hashnode.dev
              </a>
            </p>
          </div>
        ) : (
          <>
            {/* Blog Posts */}
            {displayedPosts.map((post, idx) => (
                          <div key={idx} style={{ 
              marginBottom: "3rem", 
              background: "#181818", 
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
              filter: "grayscale(100%)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 25px rgba(0,0,0,0.4)";
              e.currentTarget.style.filter = "grayscale(0%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
              e.currentTarget.style.filter = "grayscale(100%)";
            }}
            >
                {/* Cover Image */}
                {post.coverImage && (
                  <div style={{ 
                    width: "100%", 
                    height: "250px", 
                    backgroundImage: `url(${post.coverImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }} />
                )}
                
                {/* Content */}
                <div style={{ padding: "2rem" }}>
                  {/* Title */}
                  <h2 style={{ 
                    marginBottom: "0.5rem", 
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    color: "#e0e0e0",
                    lineHeight: "1.3"
                  }}>
                    {post.title}
                  </h2>
                  
                  {/* Meta Info */}
                  <div style={{ 
                    fontSize: "0.9rem", 
                    color: "#666", 
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem"
                  }}>
                    {/* Removed date */}
                    <span>👤 {post.author}</span>
                  </div>
                  
                  {/* Description */}
                  <div style={{ 
                    color: "#e0e0e0", 
                    lineHeight: "1.6",
                    fontSize: "1rem",
                    marginBottom: "1.5rem"
                  }}>
                    {truncateText(post.description, 300)}
                  </div>
                  
                  {/* Read More Button */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1rem"
                  }}>
                    <a 
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-lg btn-dark"
                      style={{
                        textDecoration: "none",
                        display: "inline-block"
                      }}
                    >
                      Read Full Post →
                    </a>
                    
                    <span style={{ 
                      fontSize: "0.8rem", 
                      color: "#666",
                      fontStyle: "italic"
                    }}>
                      Opens in new tab
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Load More Button */}
            {allPosts.length > displayedPosts.length && (
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <button 
                  onClick={loadMorePosts}
                  style={{
                    background: "none",
                    border: "2px solid #61dafb",
                    color: "#61dafb",
                    padding: "1rem 2rem",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#61dafb";
                    e.currentTarget.style.color = "#000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "none";
                    e.currentTarget.style.color = "#61dafb";
                  }}
                >
                  Load More Posts ({allPosts.length - displayedPosts.length} remaining)
                </button>
              </div>
            )}

            {/* Post Count */}
            <div style={{ 
              textAlign: "center", 
              marginTop: "2rem", 
              fontSize: "0.9rem", 
              color: "#666" 
            }}>
              Showing {displayedPosts.length} of {allPosts.length} posts
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Blog; 