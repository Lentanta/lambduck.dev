type ContactLayoutProps = {
  children: React.ReactNode
};

const ProjectsLayout = ({ children }: ContactLayoutProps) => {
  return (
    <div className="pt-10 h-screen flex">
      {children}
    </div>
  );
}

export default ProjectsLayout;