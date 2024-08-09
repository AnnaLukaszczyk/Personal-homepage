import { Error } from "./Error";
import { Loading } from "./Loading";
import { Repositories } from "./Repositories";

export const Content = () => (
	<>
		<Loading />
		<Error />
		<Repositories />
	</>
);
