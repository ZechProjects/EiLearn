export const cryptoIds= [
    { "id": "bitcoin", "symbol": "BTC", "name": "Bitcoin" },
    { "id": "ethereum", "symbol": "ETH", "name": "Ethereum" },
    { "id": "ripple", "symbol": "XRP", "name": "XRP" },
    { "id": "tether", "symbol": "USDT", "name": "Tether" },
    { "id": "solana", "symbol": "SOL", "name": "Solana" },
    { "id": "binancecoin", "symbol": "BNB", "name": "Binance Coin" },
    { "id": "usd-coin", "symbol": "USDC", "name": "USD Coin" },
    { "id": "dogecoin", "symbol": "DOGE", "name": "Dogecoin" },
    { "id": "cardano", "symbol": "ADA", "name": "Cardano" },
    { "id": "tron", "symbol": "TRX", "name": "TRON" },
    { "id": "chainlink", "symbol": "LINK", "name": "Chainlink" },
    { "id": "avalanche-2", "symbol": "AVAX", "name": "Avalanche" },
    { "id": "stellar", "symbol": "XLM", "name": "Stellar" },
    { "id": "shiba-inu", "symbol": "SHIB", "name": "Shiba Inu" },
    { "id": "sui", "symbol": "SUI", "name": "Sui" },
    { "id": "toncoin", "symbol": "TON", "name": "Toncoin" },
    { "id": "hedera-hashgraph", "symbol": "HBAR", "name": "Hedera" },
    { "id": "leo-token", "symbol": "LEO", "name": "UNUS SED LEO" },
    { "id": "litecoin", "symbol": "LTC", "name": "Litecoin" },
    { "id": "hyperliquid", "symbol": "HYPE", "name": "Hyperliquid" },
    { "id": "polygon", "symbol": "MATIC", "name": "Polygon" },
    { "id": "polkadot", "symbol": "DOT", "name": "Polkadot" },
    { "id": "dai", "symbol": "DAI", "name": "Dai" },
    { "id": "wrapped-bitcoin", "symbol": "WBTC", "name": "Wrapped Bitcoin" },
    { "id": "cosmos", "symbol": "ATOM", "name": "Cosmos" },
    { "id": "filecoin", "symbol": "FIL", "name": "Filecoin" },
    { "id": "internet-computer", "symbol": "ICP", "name": "Internet Computer" },
    { "id": "vechain", "symbol": "VET", "name": "VeChain" },
    { "id": "aave", "symbol": "AAVE", "name": "Aave" },
    { "id": "algorand", "symbol": "ALGO", "name": "Algorand" },
    { "id": "tezos", "symbol": "XTZ", "name": "Tezos" },
    { "id": "theta-token", "symbol": "THETA", "name": "Theta Network" },
    { "id": "monero", "symbol": "XMR", "name": "Monero" },
    { "id": "eos", "symbol": "EOS", "name": "EOS" },
    { "id": "bitcoin-cash", "symbol": "BCH", "name": "Bitcoin Cash" },
    { "id": "maker", "symbol": "MKR", "name": "Maker" },
    { "id": "pancakeswap-token", "symbol": "CAKE", "name": "PancakeSwap" },
    { "id": "elrond", "symbol": "EGLD", "name": "Elrond" },
    { "id": "klay-token", "symbol": "KLAY", "name": "Klaytn" },
    { "id": "huobi-token", "symbol": "HT", "name": "Huobi Token" },
    { "id": "bittorrent", "symbol": "BTT", "name": "BitTorrent" },
    { "id": "neo", "symbol": "NEO", "name": "Neo" },
    { "id": "terra-luna", "symbol": "LUNA", "name": "Terra" },
    { "id": "ftx-token", "symbol": "FTT", "name": "FTX Token" },
    { "id": "sushi", "symbol": "SUSHI", "name": "SushiSwap" },
    { "id": "zcash", "symbol": "ZEC", "name": "Zcash" },
    { "id": "dash", "symbol": "DASH", "name": "Dash" },
    { "id": "compound", "symbol": "COMP", "name": "Compound" },
    { "id": "decred", "symbol": "DCR", "name": "Decred" },
    { "id": "chiliz", "symbol": "CHZ", "name": "Chiliz" }
  ]
  

export const getCryptoId = (symbol: string) => {
  const crypto = cryptoIds.filter(cr => cr.symbol.toUpperCase() == symbol);
  return crypto[0].id;
}