import clsx, { ClassValue } from 'clsx';
import { twMerge } from "tailwind-merge";
export const clsxm = (...inputs: ClassValue[]): string => twMerge(clsx(...inputs));