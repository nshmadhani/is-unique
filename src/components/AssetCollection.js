import React from "react";



const AssetCard = ({ asset }) => {
    return (
        <div>
            <a
                class="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
                href=""
            >
                <img
                    class="object-cover w-full h-56"
                    src={asset.image_url}
                    alt=""
                />

                <div class="p-6">
                    <h5 class="text-xl font-bold">
                        {asset.name}
                    </h5>

                    <p class="mt-2 text-sm text-gray-500">
                        {asset.description} <br/>
                        {`Contract: ${asset.asset_contract.address}`}
                    </p>

                </div>
            </a>
        </div>

    )
}

const AssetGrid = ({ assetList }) => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {assetList.map((asset, index) => {
                return (<AssetCard key={index} asset={asset}></AssetCard>)
            })}

        </div>
    )



}


export default AssetGrid;