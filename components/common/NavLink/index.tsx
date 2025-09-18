"use client";
import { ComponentProps, MouseEvent } from "react";
import { Link } from "next-view-transitions";
import NProgress from "nprogress";

type NavLinkProps = ComponentProps<typeof Link>;

export function NavLink({ children, onClick, ...props }: NavLinkProps) {
    return (
        <Link
            {...props}
            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                NProgress.start();
                onClick?.(e);
            }}
        >
            {children}
        </Link>
    );
}