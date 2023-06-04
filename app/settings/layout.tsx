type SettingsLayoutProps = {
  children: React.ReactNode
};

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  return (
    <div className="pt-10 h-screen flex">
      {children}
    </div>
  );
}

export default SettingsLayout;