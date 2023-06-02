type ContactLayoutProps = {
  children: React.ReactNode
};

const RootLayout = ({ children }: ContactLayoutProps) => {
  return (
    <div className="h-screen">
      {children}
    </div>
  );
}

export default RootLayout;