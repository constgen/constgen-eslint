let atomspaceEslint = require('@atomspace/eslint')
let mergeConfigs    = require('@atomspace/eslint/src/merge-configs')

let eslintConfig = require('./eslint.config')

module.exports = function (settings = {}) {
	return function (neutrino) {
		let { esnext, browser, node } = settings

		neutrino.use(atomspaceEslint({
			esnext,
			browser,
			node,
			eslint: mergeConfigs(eslintConfig, settings.eslint)
		}))
	}
}