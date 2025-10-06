import * as React from 'react';
import { Locale } from '@/i18n.config';
import { H1, Muted, P } from '@/components/Typography';
import { CenteredContainer } from '@/components/Container';
import { SpotifyPlaylist } from '@/components/SpotifyPlaylist';
import Image from 'next/image';
import i18n from "./bio.i18n";

export interface IBioSectionProps {
    locale: Locale;
}

export function BioSection({ locale }: IBioSectionProps) {
    const t = i18n[locale];
    return (
        <div>
            <CenteredContainer className="pb-40 mt-4">
                <H1 className="pb-0">{t.hi_1}</H1>
                <H1 className="py-0 text-primary">{t.hi_2}</H1>
                <div className="grid grid-cols-4 gap-16 mt-16 lg:my-16">
                    <div className="col-span-4 lg:col-span-2 my-auto">
                        <Muted>
                            <P>
                                {t.intro}
                            </P>
                            <Image src="/images/bio/field.webp" alt="Field backside" width={500} height={300} className="block lg:hidden mx-auto w-full rounded-2xl mt-4 mb-16" />
                            <P>
                                {t.content_1}
                            </P>
                        </Muted>
                    </div>
                    <div className="col-span-4 lg:col-span-2 my-auto">
                        <Image src="/images/bio/field.webp" alt="Field backside" width={500} height={300} className="hidden lg:block mx-auto w-full rounded-2xl mt-4 mb-16" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-16 lg:my-16">
                    <div className="hidden lg:block lg:col-span-2 my-auto">
                        <SpotifyPlaylist className="mt-4 mb-16" />
                    </div>
                    <div className="col-span-4 lg:col-span-2 my-auto">
                        <Muted>
                            <P>
                                {t.content_2}
                            </P>
                        </Muted>
                    </div>
                    <div className="block lg:hidden col-span-4 lg:col-span-2 my-auto">
                        <SpotifyPlaylist className="mb-16" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-16 lg:my-16">
                    <div className="col-span-4 lg:col-span-2 my-auto">
                        <Muted>
                            <P>
                                {t.content_3}
                            </P>
                        </Muted>
                    </div>
                    <div className="col-span-4 lg:col-span-2 my-auto">
                        <Image src="/images/bio/baseball.webp" alt="Baseball Batter" width={500} height={300} className="mx-auto w-full rounded-2xl mt-4 mb-16" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-16 lg:my-16">
                    <div className="hidden lg:block lg:col-span-2 my-auto">
                        <Image src="/images/bio/conquer-online.webp" alt="Conquer Online" width={500} height={300} className="mx-auto w-full rounded-2xl mt-4 mb-16" />
                    </div>
                    <div className="col-span-4 lg:col-span-2 my-auto">
                        <Muted>
                            <P>
                                {t.content_4}
                            </P>
                        </Muted>
                    </div>
                    <div className="block lg:hidden col-span-4 lg:col-span-2 my-auto">
                        <Image src="/images/bio/conquer-online.webp" alt="Conquer Online" width={500} height={300} className="mx-auto w-full rounded-2xl mt-4 mb-16" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-16 lg:my-16">
                    <div className="col-span-4 lg:col-span-2 my-auto">
                        <Muted>
                            <P>
                                {t.content_5}
                            </P>
                            <P>
                                {t.content_6}
                            </P>
                        </Muted>
                    </div>
                    <div className="col-span-4 lg:col-span-2 my-auto">
                        <Image src="/images/bio/electronic.webp" alt="Electronic circuit" width={500} height={300} className="mx-auto w-full rounded-2xl mt-4 mb-16" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-16 lg:my-16">
                    <div className="hidden lg:block lg:col-span-2 my-auto">
                        <Image src="/images/bio/launch.webp" alt="Rocket Launch" width={500} height={300} className="mx-auto w-full rounded-2xl mt-4 mb-16" />
                    </div>
                    <div className="col-span-4 lg:col-span-2 my-auto">
                        <Muted>
                            <P>
                                {t.content_7}
                            </P>
                            <P>
                                {t.content_8}
                            </P>
                            <P>
                                {t.content_9}
                            </P>
                        </Muted>
                    </div>
                    <div className="block lg:hidden col-span-4 lg:col-span-2 my-auto">
                        <Image src="/images/bio/launch.webp" alt="Rocket Launch" width={500} height={300} className="block lg:hidden mx-auto w-full rounded-2xl mt-4 mb-16" />
                    </div>
                </div>
            </CenteredContainer >
        </div >
    );
}
