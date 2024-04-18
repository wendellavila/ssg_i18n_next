'use client';
import { Icon, IconProps } from '@iconify/react';

/**
 * Client wrapper for using Iconify icons inside server components.
 * @param {IconProps} props 
 * @returns Iconify Icon Component
 */
export default function Iconify(props: IconProps){
  return (
    <Icon {...props}/>
  );
}