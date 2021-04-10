import { firestore } from "../config/firebase-config.js";

export const generateDocumentId = (col) => {
	return firestore.collection(col).doc().id;
};
