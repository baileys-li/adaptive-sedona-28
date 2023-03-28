const BUILD = "build";
const SOURCE = "source";

const PUG_DIR = `${SOURCE}/pages`;

export const Path = {
	BUILD,
	PUG: {
		src: `${PUG_DIR}/*.pug`,
		watch: `${PUG_DIR}/**/*.pug`,
	}
}
