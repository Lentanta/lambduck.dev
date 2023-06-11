type ProjectsLayoutProps = {
  children: React.ReactNode
};

const ProjectsLayout = ({ children }: ProjectsLayoutProps) => {
  return (
    <div className="h-screen flex justify-center items-center">
      {children}
    </div>
  );
}

export default ProjectsLayout;