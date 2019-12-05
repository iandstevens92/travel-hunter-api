import dynamoDB from "../db/dynamoDB";
import { formateDDMMYYY } from "../utils/dates";
import uuidv4 from "uuid/v4";

//note the first comment is the description of the city
const getComments = (city, start, limit) => {
	let params = {
		TableName: process.env.TRAVEL_HUNTER_TABLE,
		IndexName: "scoreLSI",
		KeyConditionExpression: "#city = :cityName",
		ExpressionAttributeNames: {
			"#city": "id",
		},
		ExpressionAttributeValues: {
			":cityName": city,
		},
		ProjectionExpression: "text_information, score, sort_key",
		Limit: limit,
		ScanIndexForward: false,
	};

	if (start) {
		params.ExclusiveStartKey = start;
	}

	return new Promise((resolve, revoke) => {
		dynamoDB.query(params, (err, data) => {
			if (err) {
				console.error("Couldn't get city comments", JSON.stringify(err, null, 2));
				revoke(err);
			} else {
				resolve(data);
			}
		});
	});
};

const putUpVoteComment = (cityName, commentID) => {
	let params = {
		TableName: process.env.TRAVEL_HUNTER_TABLE,
		Key: {
			id: cityName,
			sort_key: commentID,
		},
		UpdateExpression: "ADD score :q",
		ConditionExpression: "score < :limit",
		ExpressionAttributeValues: {
			":q": 1,
			":limit": 10000,
		},
		ReturnValues: "UPDATED_NEW",
	};

	return new Promise((resolve, revoke) => {
		dynamoDB.update(params, (err, data) => {
			if (err) {
				console.error("Couldn't get city comments", JSON.stringify(err, null, 2));
				revoke(err);
			} else {
				resolve(data.Attributes);
			}
		});
	});
};

const putDownVoteComment = (cityName, commentID) => {
	let params = {
		TableName: process.env.TRAVEL_HUNTER_TABLE,
		Key: {
			id: cityName,
			sort_key: commentID,
		},
		UpdateExpression: "ADD score :q",
		ExpressionAttributeValues: {
			":q": -1,
		},
		ReturnValues: "UPDATED_NEW",
	};

	return new Promise((resolve, revoke) => {
		dynamoDB.update(params, (err, data) => {
			if (err) {
				console.error("Couldn't get city comments", JSON.stringify(err, null, 2));
				revoke(err);
			} else {
				resolve(data.Attributes);
			}
		});
	});
};

const postComment = (newComment, city) => {
	const date = formateDDMMYYY(new Date());
	let params = {
		TableName: process.env.TRAVEL_HUNTER_TABLE,
		Item: { id: city, sort_key: uuidv4(), text_information: newComment, score: 0, created_at: date, last_updated: date },
	};

	return new Promise((resolve, revoke) => {
		dynamoDB.put(params, (err, data) => {
			if (err) {
				console.error("Couldn't get city comments", JSON.stringify(err, null, 2));
				revoke(err);
			} else {
				resolve(data);
			}
		});
	});
};

export { getComments, putUpVoteComment, putDownVoteComment, postComment };
