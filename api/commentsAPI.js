import * as controller from "../controllers/commentsController";

const getComments = async (event, context, callback) => {
	try {
		const { city, start, limit } = event;
		const { Items, LastEvaluatedKey } = await controller.getComments(city, start, limit);
		callback(null, {
			statusCode: 200,
			body: JSON.stringify({
				message: "Returned list of cities",
			}),
			data: Items,
			lastEvaluatedKey: LastEvaluatedKey,
		});
	} catch (e) {
		callback(null, {
			statusCode: 500,
			body: JSON.stringify({
				message: "Problem querying the database",
				error: e,
			}),
		});
	}
};

const putUpVoteComment = async (event, context, callback) => {
	try {
		const { cityName, commentID } = event;
		const comments = await controller.putUpVoteComment(cityName, commentID);
		callback(null, {
			statusCode: 200,
			body: JSON.stringify({
				message: "Comment up voted",
			}),
			data: comments,
		});
	} catch (e) {
		callback(null, {
			statusCode: 500,
			body: JSON.stringify({
				message: "Problem querying the database",
				error: e,
			}),
		});
	}
};

const putDownVoteComment = async (event, context, callback) => {
	try {
		const { cityName, commentID } = event;
		const comments = await controller.putDownVoteComment(cityName, commentID);
		callback(null, {
			statusCode: 200,
			body: JSON.stringify({
				message: "Comment down voted",
			}),
			data: comments,
		});
	} catch (e) {
		callback(null, {
			statusCode: 500,
			body: JSON.stringify({
				message: "Problem querying the database",
				error: e,
			}),
		});
	}
};

const postComment = async (event, context, callback) => {
	try {
		const { newComment, city } = event;
		const comments = await controller.postComment(newComment, city);
		callback(null, {
			statusCode: 200,
			body: JSON.stringify({
				message: "Comment created",
			}),
			data: comments,
		});
	} catch (e) {
		callback(null, {
			statusCode: 500,
			body: JSON.stringify({
				message: "Problem querying the database",
				error: e,
			}),
		});
	}
};

export { getComments, putUpVoteComment, putDownVoteComment, postComment };
