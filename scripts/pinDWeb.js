// Most code here is borrowed from github.com/scaffold-eth/scaffold-eth
import { create, globSource } from "ipfs-core";

const ipfs = await create();

const pushDirectoryToIPFS = async (path) => {
	try {
        const glob = globSource(path, '**/*');
		const file = await ipfs.addAll(glob, {
            wrapWithDirectory: true
        });
		let lastRes;
		for await (const f of file) {
			lastRes = f;
		}
		return lastRes;
	} catch (e) {
		return {};
	}
};

const deploy = async () => {
	console.log('🛰  Sending to IPFS...');
	const { cid } = await pushDirectoryToIPFS('./build');
	if (!cid) {
		console.log(`📡 App deployment failed`);
		return false;
	}
	console.log(`📡 App deployed to IPFS with CIDv1 hash: ${cid.toV1().toString()}`);
	console.log();

	console.log(`Use the link below to access your app:`);
	console.log(`🚀 IPFS: https://${cid.toV1().toString()}.ipfs.dweb.link`);
	return cid.toV1();
};

const pin = async (ensToPin, cid) => {
    const response = await fetch(`https://dwebservices.xyz/api/eth-names-ipns/${ensToPin}/publish_by_name/${cid.toString()}`,
    {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': `Bearer ${process.env.DWEBSERVICES_KEY}`,
        }
    })
    const res = await response.json();
    console.log("");
    if(res.status == "ok") {
        console.log(`📡 Pinned to DWebServices`);
        console.log("");
        console.log(`🚀 ENS: https://${res.data.name}.limo`);
    }
    else {
        console.log(`📡 ENS/DwebServices pinning failed.`);
        console.log(res);
        return false;
    }
    console.log(await fetch(`https://${res.data.name}.limo`));
    return true;
}

const cid = await deploy();

if(!!cid && !!process.env.DWEBSERVICES_KEY) {
    await pin("me.drewf.eth", cid);
}
// Wait for propogation before kill
setTimeout(() => process.exit(), 60000);
