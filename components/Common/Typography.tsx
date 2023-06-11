import clsx from 'clsx';

export const Paragraph = ({ children, className }: { children: string, className?: string }) => (
  <p className={clsx(
    "font-nunito text-A3",
    "text-base",
    className
  )}>
    {children}
  </p>
);
