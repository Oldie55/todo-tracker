import { Typography } from '@material-ui/core';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IExampleProps {
	text: string;
}

export function Example({ text }: IExampleProps) {
	return <Typography>I'm a example component: {text}</Typography>;
}
