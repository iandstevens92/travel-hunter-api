import * as controller from "../controllers/citiesController";

const getCities = async (event, context, callback) => {
	try {
		const { Items } = await controller.getCities();
		callback(null, {
			statusCode: 200,
			body: JSON.stringify({
				message: "Returned list of cities",
			}),
			data: Items,
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

export { getCities };
