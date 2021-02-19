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
  return {
    edit: (
      <Template toggle={props.toggle} width={1450} height={1050}>
        <ProjectModalEdit visible={props.visible} state={props.state} />
      </Template>
    ),
    writing: (
      <Template toggle={props.toggle} width={1450} height={1000}>
        <ProjectModalWriting visible={props.visible} />
      </Template>
    ),
    view: (
      <Template toggle={props.toggle} width={1450} height={870}>
        <ProjectModalEdit visible={props.visible} state={props.state} />
      </Template>
    ),
    viewOnly: (
      <Template toggle={props.toggle} width={1450} height={870}>
        <ProjectModalEdit visible={props.visible} state={props.state} />
      </Template>
    ),
  }[props.state];
};

export default ProjectModal;
