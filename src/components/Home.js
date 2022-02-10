import React, { useEffect, useState } from "react"
import Header from './Header'
import AssetGrid from "./AssetCollection";
import Provider from "../api";
import SearchBar from "./SearchBar";



const Home = () => {

    const [platform_id, setPlatform] = useState(1);
    const [assetList, setAssetList] = useState([]);

    const searchByContract = async (address) => {
        const assets = await Provider.getAssetsForContract(platform_id, address)
        console.log(assets)
        setAssetList(assets)
    }
    const searchByOwner = async (address) => {
        console.log(address)
        const assets = await Provider.getOwnedAssetsByCollection(platform_id, address)
        console.log(assets)
        setAssetList(assets)
    }



    useEffect(() => {
        setAssetList([])
    }, [platform_id])




    return (
        <div>
            <Header setPlatform={setPlatform}></Header>

            <div className="flex flex-col m-10 gap-y-4">
                <div className="flex flex-row">
                    <SearchBar label={"Contract Addr"} onClick={searchByContract}></SearchBar>
                    <SearchBar label={"Owner Addr"} onClick={searchByOwner}></SearchBar>
                </div>
                <AssetGrid assetList={assetList}></AssetGrid>
            </div>



        </div>
    );
}

export default Home
