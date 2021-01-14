import { Example, IExampleProps } from './Example';

export default {
	title: 'Components / Example',
	component: Example,
};

export const Dynamic = (args: IExampleProps) => <Example {...args} />;
const INITIAL_PROPS: IExampleProps = {
	text: "I'm a text",
};
Dynamic.args = INITIAL_PROPS;
