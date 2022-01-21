import { getAuth } from "firebase/auth";
import { app } from "../../services/firebase.config";
import React, { useState, useEffect, createContext } from "react";
export const UserContext = createContext({ user: null });
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
	const auth = getAuth(app);
	const [user, setuser] = useState(null);
	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			const { displayName, email } = user;
			setuser({
				displayName,
				email,
			});
		});
	}, [auth]);
	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
