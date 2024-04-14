import React from "react";

const EmailTemplate = ({ name, message }) => {
  return (
    <section
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p>
          Hello <span>{name}</span>,
        </p>
        <p>Thank you for contacting me. I'll get back to you shortly.</p>
        <div style={{ borderTop: "1px solid #ccc", paddingTop: "10px" }}>
          <p>
            Your message:
            <span>{message}</span>
          </p>
          <p>
            Best Regards,
            <br />
            Aagam Doshi
          </p>
          <div style={{ marginTop: "10px" }}>
            <a
              href="https://github.com/aagamdoshi1100"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                alt="GitHub icon"
                width="36px"
                height="36px"
                style={{ marginRight: "10px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aagamdoshi1100"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/01-dsk-e8-v2.png.original.png"
                alt="LinkedIn icon"
                width="92px"
                height="36px"
                style={{ marginRight: "10px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailTemplate;
