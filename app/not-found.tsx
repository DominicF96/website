"use client";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  redirect(`/error/404?route=${encodeURIComponent(pathname)}`);
};

export default NotFound;