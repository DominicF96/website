import { Locale } from "@/i18n.config";
import { CenteredContainer, PageContainer } from "@/components/Container";
import { SpotifyPlaylist } from "@/components/SpotifyPlaylist";
import metadata from "./metadata";
import { H1, Muted } from "@/components/Typography";
import { BioSection } from "@/components/pages/bio/BioSection";

type BioPageProps = {
    params: {
        locale: Locale;
    };
};
export const generateMetadata = metadata;

export default function BioPage({ params }: BioPageProps) {
    const { locale } = params;
    return (
        <PageContainer>
            <BioSection locale={locale} />
        </PageContainer>
    );
}



