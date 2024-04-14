import React from "react";
import Link from "next/link";
import Image from "next/image";

function SocialLinks() {
  return (
    <div className="social-links flex gap-4">
      <Link
        href="https://github.com/aagamdoshi1100"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          src={"/github-mark-white.png"}
          alt="github icon"
          width={40}
          height={40}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/aagamdoshi1100"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image src={"/linkedin.png"} alt="Linked icon" width={40} height={40} />
      </Link>
    </div>
  );
}

export default SocialLinks;
