import React from "react";
import Link from "next/link";

interface LinkProps {
  href: string;
  hyperText: string;
  styles?: string; // Make className optional
}

const CLink: React.FC<LinkProps> = ({ href, hyperText, styles}) => {
  return (
    <Link href={href} className={`text-main hover:text-main/90 ${styles}`}>
      {hyperText}
    </Link>
  );
};

export default CLink;
