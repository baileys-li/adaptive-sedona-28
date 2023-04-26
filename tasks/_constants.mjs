const BUILD = "build";
const SOURCE = "source";

const PUG_DIR = `${SOURCE}/pages`;
const DATA_DIR = `${SOURCE}/data`;
const ICONS_DIR = `${SOURCE}/icons`;
const IMAGES_DIR = `${SOURCE}/images`;

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
		common: `${SOURCE}/sass/common/`,
	},
	SCRIPTS: {
		src: `${SOURCE}/typescript/*.ts`,
		dest: `${BUILD}/js`,
		watch: `${SOURCE}/typescript/**/*.ts`,
	},
	IMAGES: {
		src: `${IMAGES_DIR}/**/*.{jpg,png}`,
		dest: `${BUILD}/img`,
	},
	ICONS: {
		dir: `${ICONS_DIR}`,
		watch: `${ICONS_DIR}/**/*.svg`,
		src: `${IMAGES_DIR}/**/*.svg`,
	}
};

