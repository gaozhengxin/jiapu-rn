const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
    let defaultConfig = await getDefaultConfig();

    return {
        resolver: {
            assetExts: [...defaultConfig.resolver.assetExts, "webview", "css", "json"],
        },
        transformer: {
            assetPlugins: ['expo-asset/tools/hashAssetFiles'],
        },
    };
})();