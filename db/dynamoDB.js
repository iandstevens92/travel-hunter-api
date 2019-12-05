import AWS from "aws-sdk";
import { IS_OFFLINE } from "../config/app";

const dynamoDB = IS_OFFLINE
	? new AWS.DynamoDB.DocumentClient({
			region: "localhost",
			endpoint: "http://localhost:8000",
			convertEmptyValues: true,
	  })
	: new AWS.DynamoDB.DocumentClient({
			convertEmptyValues: true,
	  });

export default dynamoDB;
