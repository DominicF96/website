import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import socials from "@/constants/socials";
import { FileTextIcon } from "lucide-react";
import { Locale } from "@/i18n.config";

type Props = {
  className?: string;
  locale?: Locale;
};

const SocialsLogoMap = (social: string) => {
  switch (social) {
    case "github":
      return <GitHubLogoIcon color="#5cd6ad" height={24} width={24} />;
    case "linkedin":
      return <LinkedInLogoIcon color="#5cd6ad" height={24} width={24} />;
    case "twitter":
      return <TwitterLogoIcon color="#5cd6ad" height={24} width={24} />;
    default:
      return null;
  }
};

function Socials({ className, locale }: Props) {
  return (
    <ul className={`flex gap-2 ${className || ""}`}>
      {socials.map((social) => (
        <li key={social.name}>
          <Button
            variant="link"
            className="px-2 hover:px-2"
            aria-label={social.name}
            asChild
          >
            <Link href={social.url} target="_blank">
              {SocialsLogoMap(social.name)}
            </Link>
          </Button>
        </li>
      ))}
      <li>
        <Button
          variant="link"
          className="px-2 hover:px-2"
          aria-label="CV / Resume"
          asChild
        >
          <Link
            href={`/${locale}/files/Dominic_Fournier.pdf`}
            download={`Dominic_Fournier_${locale}.pdf`}
            target="_blank"
          >
            <FileTextIcon color="#5cd6ad" height={24} width={24} />
          </Link>
        </Button>
      </li>
    </ul>
  );
}

export default Socials;
