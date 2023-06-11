import NextLink from 'next/link';
import clsx from 'clsx';

type PropsType = {
  text: string,
  href: string,
  onClick?: () => void;
}

export const HeaderLink = (props: PropsType) => {
  const { text, href, onClick } = props;

  return (
    <NextLink href={href} onClick={onClick} className={clsx(
      "font-nunito",
      "text-lg font-normal text-primary-brown",
      "leading-relaxed",
      "hover:opacity-60 hover:underline",
    )}>
      {text}
    </NextLink>
  )
};