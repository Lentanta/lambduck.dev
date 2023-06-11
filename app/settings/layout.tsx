type SettingsLayoutProps = {
  children: React.ReactNode
};

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  return (
    <div className="h-screen flex justify-center items-center">
      {children}
    </div>
  );
}

export default SettingsLayout;