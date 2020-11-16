const domen = 'https://min-api.cryptocompare.com/data/'
const fsyms = 'BTC,ETH,LTC,XRP,DASH,XMR,ZEC,REP,BCH,EOS,IOTA,ADA,NEO,BTG,USDT';
const apiKey = '3cfc3515dfffd0711f93e0a23743421408af87cf3260e9b726f18a5f5e1d1b85'

export default {
    state: {
        cryptos: {},
        database: [],
    },

    getters: {
        cryptos: state => state.cryptos,
        allCryptos: state => state.database,
    },

	mutations: {
        setCryptos: (state, data) => state.cryptos = data,
        updateCrypto: (state, data) => state.database.length < 15 ? state.database.push(data) : state.database.shift(),
    },

	actions: {
        
        async cryptoDatabase(ctx){
            try {
                const response = await fetch(`${domen}pricemulti?fsyms=${fsyms}&tsyms=USD&api_key=${apiKey}`)
                if (response.ok) {
                    const cryptos = await response.json();
                    ctx.commit("updateCrypto", cryptos)
                    ctx.commit("setCryptos", cryptos)
                } else {
                    console.log("HTTP error: " + response.status);
                }
            } catch (e) {
                console.log(e);
            }
        },

	},
}