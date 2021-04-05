import { ProjectModal, FieldChoice } from "Components";
import Template from "Components/Modal/Template/Template";

interface ProjectProps {
  visible: boolean;
  state: string;
  toggle?: any;
}

const Project: React.FC<ProjectProps> = (props: ProjectProps) => {
  return {
    edit: (
      <Template toggle={props.toggle} width={1450} height={1000}>
        <ProjectModal visible={props.visible} state={props.state} />
      </Template>
    ),
    writing: (
      <Template toggle={props.toggle} width={1450} height={1000}>
        <ProjectModal visible={props.visible} state={props.state} />
      </Template>
    ),
    Choice: (
      <Template toggle={props.toggle} width={1450} height={1000}>
        <FieldChoice visible={props.visible} />
      </Template>
    ),
    view: (
      <Template toggle={props.toggle} width={1450} height={1000}>
        <ProjectModal visible={props.visible} state={props.state} />
      </Template>
    ),
    viewOnly: (
      <Template toggle={props.toggle} width={1450} height={1000}>
        <ProjectModal visible={props.visible} state={props.state} />
      </Template>
    ),
  }[props.state];
};

export default Project;
