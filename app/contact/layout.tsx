type ContactLayoutProps = {
  children: React.ReactNode
};

const ContactLayout = ({ children }: ContactLayoutProps) => {
  return (
    <div className="h-screen flex justify-center items-center">
      {children}
    </div>
  );
}

export default ContactLayout;