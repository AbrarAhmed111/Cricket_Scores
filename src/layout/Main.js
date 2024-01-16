import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Main = props => {
	return (
		<>
		<div className="min-h-[100vh] ">

			{props.children}
		</div>
		</>
	);
};

export default Main;
