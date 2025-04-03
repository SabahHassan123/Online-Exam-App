import React from "react";
import Link from "next/link";

interface LinkProps {
  href: string;
  hyperText: string;
  boldText?: string; // Make className optional
}

const CLink: React.FC<LinkProps> = ({ href, hyperText, boldText = "" }) => {
  return (
    <Link href={href} className={`text-main hover:text-main/90 ${boldText}`}>
      {hyperText}
    </Link>
  );
};

export default CLink;
