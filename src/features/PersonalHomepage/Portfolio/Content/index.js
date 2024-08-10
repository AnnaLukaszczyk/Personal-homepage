import { Error } from "./Error";
import { Loading } from "./Loading";
import { Repositories } from "./Repositories";

export const Content = ({ status, repositories }) => {
	switch (status) {
		case "success":
			return <Repositories repositories={repositories} />;
		default:
			return (
				<>
					<Loading />
					<Error />
				</>
			);
	}
};
