"use client";
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { CenteredContainer } from '@/components/Container';
import Image from 'next/image';

export interface ISecretImageProps { }

export function SecretImage(props: ISecretImageProps) {
    const [cookies, setCookie] = useCookies(['secretUnlocked']);
    const [secretUnlocked, setSecretUnlocked] = useState(false);
    const [animateGlasses, setAnimateGlasses] = useState(false);

    useEffect(() => {
        if (cookies.secretUnlocked) {
            setSecretUnlocked(cookies.secretUnlocked);
            // Start animation after render
            setTimeout(() => setAnimateGlasses(true), 50);
        }
    }, [cookies.secretUnlocked]);

    return (
        <CenteredContainer>
            <div className="block lg:hidden px-4 py-8 relative z-10">
                <Image src="/images/dominic_fournier.webp" height={256} width={256} alt="Dominic Fournier" />
                {secretUnlocked && (
                    <div
                        className={`absolute right-36 transition-all ease-out ${animateGlasses ? 'top-[72px]' : '-top-96'
                            }`}
                        style={{ transitionDuration: '10s' }}
                    >
                        <Image
                            src="/vectors/secret_glasses.svg"
                            height={50}
                            width={150}
                            alt=""
                            className="glitch-svg opacity-80"
                        />
                    </div>
                )}
            </div>
            <div className="hidden lg:block absolute top-32 right-0">
                <Image
                    src="/images/dominic_fournier.webp"
                    height={500}
                    width={1500}
                    alt="Dominic Fournier"
                    className="w-[500px]"
                    onClick={() => removeSecret()}
                />
                {secretUnlocked && (
                    <div
                        className={`absolute right-28 transition-all ease-out ${animateGlasses ? 'top-20' : '-top-96'
                            }`}
                        style={{ transitionDuration: '10s' }}
                    >
                        <Image
                            src="/vectors/secret_glasses.svg"
                            height={100}
                            width={300}
                            alt=""
                            className="glitch-svg opacity-80"
                            onClick={() => removeSecret()}
                        />
                    </div>
                )}
            </div>
        </CenteredContainer>
    );
}
