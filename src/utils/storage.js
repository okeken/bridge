import { sismember, set, get } from "lockr";
import { L1L2_NETWORKS } from "./constants";

const findUmbrellaNetwork = (chainId) => {
    for (let n in L1L2_NETWORKS) {
        if (L1L2_NETWORKS[n].includes(chainId.toLowerCase())) {
            return n;
        }
    }
}

export const getTransaction = (chainId, wallet, type, propName, propValue) => {
    const umbrellaNetwork = findUmbrellaNetwork(chainId);
    const networks = get(wallet.toLowerCase(), null);

    if (networks && networks.hasOwnProperty(umbrellaNetwork)) {
        const network = networks[umbrellaNetwork];
        if (network[type]) {
            for (const tx of network[type]) {
                if (tx[propName].toLowerCase() == propValue.toLowerCase()) {
                    console.log(tx);
                    return tx;
                }
            }
        }
    }
}

export const getTransactions = (chainId, wallet) => {
    const umbrellaNetwork = findUmbrellaNetwork(chainId);
    const networks = get(wallet.toLowerCase(), null);
    let deposits = [];
    let withdrawals = [];

    if (networks && networks.hasOwnProperty(umbrellaNetwork)) {
        const network = networks[umbrellaNetwork];
        if (network.deposits) {
            deposits = networks[umbrellaNetwork].deposits;
        }
        if (network.withdrawals) {
            withdrawals = networks[umbrellaNetwork].withdrawals;
        }
    }

    return {
        deposits,
        withdrawals,
    }
}

export const storeTransaction = (chainId, wallet, token, transaction, status, type) => {
    const umbrellaNetwork = findUmbrellaNetwork(chainId);
    const networks = get(wallet.toLowerCase(), {});

    if (networks && networks.hasOwnProperty(umbrellaNetwork)) {
        const network = networks[umbrellaNetwork];
        if (network.hasOwnProperty(type)) {
            // Prepend new transaction
            network[type] = [{
                hash: transaction.hash,
                status,
                timestamp: transaction.timestamp,
                token
            }, ...network[type]];
        }
    } else {
        networks[umbrellaNetwork] = {
            withdrawals: [],
            deposits: [],
        };

        networks[umbrellaNetwork][type].push({
            hash: transaction.hash,
            status,
            timestamp: transaction.timestamp,
            token
        });
    }

    set(wallet.toLowerCase(), networks);
}