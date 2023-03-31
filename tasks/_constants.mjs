const BUILD = "build";
const SOURCE = "source";

const PUG_DIR = `${SOURCE}/pages`;
const DATA_DIR = `${SOURCE}/data`;

export const Path = {
	BUILD,
	PUG: {
		src: `${PUG_DIR}/*.pug`,
		watch: `${PUG_DIR}/**/*.pug`,
	},
	DATA: {
		src: DATA_DIR,
		watch: `${DATA_DIR}/**/*.{yml, yaml}`,
	},
	ASSETS: `${SOURCE}/assets/**/*`,
	STYLES: {
		src: `${SOURCE}/sass/*.scss`,
		dest: `${BUILD}/css`,
		watch: `${SOURCE}/sass/**/*.scss`,
	}
};
