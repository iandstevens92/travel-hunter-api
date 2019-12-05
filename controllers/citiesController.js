import dynamoDB from "../db/dynamoDB";

const getCities = () => {
	const params = {
		TableName: process.env.TRAVEL_HUNTER_TABLE,
		KeyConditionExpression: "#city = :cityName",
		ExpressionAttributeNames: {
			"#city": "id",
		},
		ExpressionAttributeValues: {
			":cityName": "City",
		},
		ProjectionExpression: "sort_key, best_time, average_price, average_age",
	};

	return new Promise((resolve, revoke) => {
		dynamoDB.query(params, (err, data) => {
			if (err) {
				console.error("Couldn't get city list from table", JSON.stringify(err, null, 2));
				revoke(err);
			} else {
				console.log("Query succeeded.");
				resolve(data);
			}
		});
	});
};

export { getCities };
