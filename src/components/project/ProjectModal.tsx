import ProjectModalWriting from "./projectModalState/ProjectModalWriting";
import ProjectModalEdit from "./projectModalState/ProjectModalEdit";

interface ProjectModalProps {
  visible: boolean;
  state: string;
}

const ProjectModal: React.FC<ProjectModalProps> = (
  props: ProjectModalProps
) => {
  return props.state === "writing" ? (
    <ProjectModalWriting visible={props.visible} state={props.state} />
  ) : (
    <ProjectModalEdit visible={props.visible} state={props.state} />
  );
};

export default ProjectModal;
