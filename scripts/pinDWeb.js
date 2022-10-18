// Most code here is borrowed from github.com/scaffold-eth/scaffold-eth
import { create, globSource } from "ipfs-core";
import { select_option } from "svelte/internal";

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
	console.log(`🚀 Launched on IPFS: https://${cid.toV1().toString()}.ipfs.dweb.link`);
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
        console.log(`📡 Updated IPNS hash on DWebServices`);
        console.log("");
        const pinStatus = async () => (await (await fetch(`https://dwebservices.xyz/api/eth-names-ipns/get_by_name/${ensToPin}`, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${process.env.DWEBSERVICES_KEY}`,
            }
        })).json()).data.published_status
        const pinned = new Promise((resolve, reject) => {
            setInterval(async () => {
                const status = await pinStatus()
                if(status == "active") resolve(status)
                else if(status == "failed") reject(status)
                else console.log(`IPNS pinning status: ${status}`)
            }, 3000);
        })

        await (pinned.then( () => {
            console.log(`🚀 Pinned on ENS: https://${res.data.name}.limo`);
        }).catch(reason => console.log(`dwebservices pinning failed with status: ${reason}`)))
    }
    else {
        console.log(`📡 ENS/DwebServices pinning failed.`);
        console.log(res);
        return false;
    }
}

const cid = await deploy();

if(!!cid && !!process.env.DWEBSERVICES_KEY) {
    await pin("me.drewf.eth", cid);
}
process.exit()
