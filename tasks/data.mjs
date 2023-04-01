import fs from "fs";
import path from "path";
import { parse } from "yaml";
import { Path } from "./_constants.mjs";

const dirPath = Path.DATA.src;

export function getPugData() {
	const data = {};
	if	(!fs.existsSync(dirPath)) return data;

	fs.readdirSync(dirPath).forEach((fileName) => {
		const key = path.parse(fileName).name;
		const file = fs.readFileSync(`${dirPath}/${fileName}`, "utf8");
		const parsedYML = parse(file);

		data[key] = parsedYML;
	});

	return data;
}
