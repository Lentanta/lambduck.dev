type ContactLayoutProps = {
  children: React.ReactNode
};

const RootLayout = ({ children }: ContactLayoutProps) => {
  return (
    <div className="pt-20 min-h-screen">
      {children}
    </div>
  );
}

export default RootLayout;