import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Main = props => {
	return (
		<>
			<Header/>
			{props.children}
			<Footer/>
		</>
	);
};

export default Main;
