import React, { useEffect, useState } from 'react';
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

export default function UserPage() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [checkedItems, setCheckedItems] = useState({});
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [isDark, setIsDark] = useState(false);

  const handleData = async () => {
    setLoading(true);
    try {
      const url = query
        ? `https://api.artic.edu/api/v1/artworks?page=${page}&q=${encodeURIComponent(query)}`
        : `https://api.artic.edu/api/v1/artworks?page=${page}`;
      const res = await fetch(url);
      const data = await res.json();
      setArtworks(data.data || []);
    } catch (error) {
      console.error("Error fetching artworks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleData();
  }, [page, query]);

  const handleCheckboxToggle = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(search);
  };

  // Sync body colors globally
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#111827" : "#f9fafb";
    document.body.style.color = isDark ? "#e5e7eb" : "#111827";
  }, [isDark]);

  const pageStyle = {
    padding: "40px",
    fontFamily: "Inter, Arial, sans-serif",
    backgroundColor: isDark ? "#111827" : "#f9fafb",
    color: isDark ? "#e5e7eb" : "#111827",
    minHeight: "100vh",
    transition: "background-color 0.4s ease, color 0.4s ease",
  };

  return (
    <div style={pageStyle}>
      {/* HEADER SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            color: isDark ? "#f9fafb" : "#111827",
          }}
        >
          🎨 Artworks Gallery
        </h1>

        {/* TOGGLE SWITCH */}
        <div
          onClick={() => {
            setIsDark((prev) => 
          !prev  
          
          );
          }}
          style={{
            width: "70px",
            height: "34px",
            borderRadius: "50px",
            background: isDark
              ? "linear-gradient(135deg, #1e293b, #0f172a)"
              : "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
            border: isDark ? "1px solid #334155" : "1px solid #d1d5db",
            display: "flex",
            alignItems: "center",
            padding: "4px",
            cursor: "pointer",
            boxShadow: isDark
              ? "0 0 10px rgba(255,255,255,0.1)"
              : "0 0 10px rgba(0,0,0,0.1)",
            transition: "all 0.4s ease",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              background: isDark
                ? "radial-gradient(circle at 30% 30%, #facc15, #eab308)"
                : "radial-gradient(circle at 30% 30%, #60a5fa, #3b82f6)",
              transform: isDark ? "translateX(36px)" : "translateX(0)",
              transition: "all 0.4s ease",
              boxShadow: isDark
                ? "0 0 8px rgba(250, 204, 21, 0.5)"
                : "0 0 8px rgba(96,165,250,0.4)",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: isDark ? "10px" : "40px",
              transform: "translateY(-50%)",
              fontSize: "0.9rem",
              transition: "all 0.3s ease",
            }}
          >
            {isDark ? "🌙" : "☀️"}
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div
        style={{
          background: isDark ? "#1f2937" : "#ffffff",
          color: isDark ? "#f9fafb" : "#34495e",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          padding: "1rem",
          width: "90%",
          maxWidth: "500px",
          margin: "0 auto 30px auto",
        }}
      >
        <form
          onSubmit={handleSearch}
          style={{
            display: "flex",
            width: "100%",
            background: isDark ? "#1f2937" : "#ffffff",
          }}
        >
          <input
            type="search"
            placeholder="Search artworks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flexGrow: 1,
              padding: "0.75rem 1rem",
              border: "1px solid #d1d5db",
              borderRight: "none",
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
              outline: "none",
              fontSize: "1rem",
              background: isDark ? "#111827" : "#ffffff",
              color: isDark ? "#f9fafb" : "#111827",
            }}
          />
          <button
            type="submit"
            style={{
              background: isDark ? "#374151" : "#f3f4f6",
              color: isDark ? "#f9fafb" : "#111827",
              fontWeight: 600,
              padding: "0.75rem 1.25rem",
              border: "none",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
            }}
          >
            🔍
          </button>
        </form>
      </div>

      {/* Artworks Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "25px",
          background: isDark ? "#1f2937" : "#ffffff",
          color: isDark ? "#f9fafb" : "#34495e",
          borderRadius: "15px",
          padding: "30px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          transition: "all 0.3s ease",
        }}
      >
        {loading ? (
          <p style={{ textAlign: "center", gridColumn: "1/-1", color: "#888" }}>
            Loading artworks...
          </p>
        ) : artworks.length === 0 ? (
          <p style={{ textAlign: "center", gridColumn: "1/-1", color: "#888" }}>
            No artworks found.
          </p>
        ) : (
          artworks.map((artwork) => (
            <div
              key={artwork.id}
              style={{
                background: isDark ? "#111827" : "#ffffff",
                color: isDark ? "#e5e7eb" : "#111827",
                borderRadius: "12px",
                padding: "15px",
                boxShadow: isDark
                  ? "0 2px 10px rgba(255,255,255,0.05)"
                  : "0 2px 10px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = isDark
                  ? "0 8px 20px rgba(255,255,255,0.08)"
                  : "0 8px 20px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = isDark
                  ? "0 2px 10px rgba(255,255,255,0.05)"
                  : "0 2px 10px rgba(0,0,0,0.08)";
              }}
            >
              <Checkbox
                style={{ cursor: "pointer", marginBottom: "10px" }}
                checked={!!checkedItems[artwork.id]}
                onChange={() => handleCheckboxToggle(artwork.id)}
              />

              {artwork.image_id ? (
                <img
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`}
                  alt={artwork.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "180px",
                    borderRadius: "10px",
                    background: isDark ? "#374151" : "#eee",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: isDark ? "#9ca3af" : "#999",
                    marginBottom: "10px",
                  }}
                >
                  No image
                </div>
              )}

              <h3 style={{ fontSize: "1.1rem", textAlign: "center" }}>
                {artwork.title}
              </h3>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.9rem",
                  opacity: 0.8,
                }}
              >
                {artwork.artist_title || "Unknown Artist"}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <Button
          label="⬅ Prev Page"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={loading || page === 1}
          className="p-button-primary p-button-rounded"
        />
        <Button
          label="Next Page ➡"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={loading}
          className="p-button-success p-button-rounded"
        />
      </div>
    </div>
  );
}
