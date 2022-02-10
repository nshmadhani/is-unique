import * as Opensea from '../_aqua/opensea';
import * as Rarible from '../_aqua/rarible'


const Provider = {
    async getAssetsForContract(platform_id, contract) {
        return this.isOpensea(platform_id) ? await OpenseaAPI.getAssetsForContract(contract) : await RaribleAPI.getAssetsForContract(contract);
    },
    async getOwnedAssetsByCollection(platform_id, owner) {
        return this.isOpensea(platform_id) ? await OpenseaAPI.getOwnedAssetsByCollection(owner) : await RaribleAPI.getOwnedAssetsByCollection(owner);
    },
    isOpensea(platform_id) {
        return platform_id === 1;
    }
}


const RaribleAPI = {
    async getAssetsForContract(contract) {
        try {
            let response_string = await Rarible.get_assets_by_contract(
                contract
            );
            let response = JSON.parse(response_string);
            let assets = response.items;
            let cleanedAssets = [];
            
            assets.forEach((asset) => {
                cleanedAssets.push(this.cleanAsset(asset))
            })
            return cleanedAssets;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    async getOwnedAssetsByCollection(
        collection_addr,
    ) {
        try {
            let response_string = await Rarible.get_assets_owned_by_address(
                collection_addr
            );
            let response = JSON.parse(response_string);
            let assets = response.items;
            let cleanedAssets = [];
            assets.forEach((asset) => {
                cleanedAssets.push(this.cleanAsset(asset))
            })
            return cleanedAssets;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    cleanAsset(asset) {

        return  {
            description: asset.meta.description,
            image_url: asset.meta.image? asset.meta.image.url.ORIGINAL: "https://via.placeholder.com/150",
            name: asset.meta.name,
            asset_contract: asset.contract,
            id: asset.tokenId
        }
    }
};


const OpenseaAPI = {
    async getAssetsForContract(contract) {
        try {
            let response_string = await Opensea.get_assets_by_contract(
                contract
            );
            let response = JSON.parse(response_string);
            let assets = response.assets;
            let cleanedAssets = [];
            
            assets.forEach((asset) => {
                cleanedAssets.push(this.cleanAsset(asset))
            })
            return cleanedAssets;
        } catch (error) {
            console.error(error);
            return [];
        }
    },

    async getOwnedAssetsByCollection(
        collection_addr,
    ) {
        try {
            let response_string = await Opensea.get_assets_owned_by_address(
                collection_addr, 
                { ttl: 30000}
            );
            let response = JSON.parse(response_string);
            let assets = response.assets;
            let cleanedAssets = [];
            assets.forEach((asset) => {
                cleanedAssets.push(this.cleanAsset(asset))
            })
            return cleanedAssets;
        } catch (error) {
            console.error(error);
            return [];
        }
    },

    cleanAsset(asset) {
        return  {
            description: asset.description,
            image_url: asset.image_url ? asset.image_url : "https://via.placeholder.com/150",
            name: asset.name,
            asset_contract: asset.asset_contract,
            id: asset.token_id
        }
    }
};


export default Provider