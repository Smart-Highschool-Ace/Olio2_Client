import ProjectModalWriting from "./projectModalState/ProjectModalWriting";
import ProjectModalEdit from "./projectModalState/ProjectModalEdit";
import Template from "../Modal/Template/Template";

interface ProjectModalProps {
  visible: boolean;
  state: string;
  toggle?: any;
}

const ProjectModal: React.FC<ProjectModalProps> = (
  props: ProjectModalProps
) => {
  console.log(props.state);
  return props.state === "writing" ? (
    <Template toggle={props.toggle} width={1400} height={975}>
      <ProjectModalWriting visible={props.visible} />
    </Template>
  ) : (
    <Template toggle={props.toggle} width={1400} height={975}>
      <ProjectModalEdit visible={props.visible} state={props.state} />
    </Template>
  );
};

export default ProjectModal;
