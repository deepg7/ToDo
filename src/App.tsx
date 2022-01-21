import SignIn from "./components/SignIn";
import UserProvider from "./context/UserProvider";

function App() {
	return (
		<div className="text-black">
			<UserProvider>
				<SignIn />
			</UserProvider>
		</div>
	);
}

export default App;
