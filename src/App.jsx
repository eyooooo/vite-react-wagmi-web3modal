import { useState } from 'react'
import styled from 'styled-components';

///////////////////////////////////////
import Header from './header';

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig, useNetwork } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'

///////////////////////////////////////

const chains = [arbitrum, mainnet, polygon]
const projectId = 'YOUR_PROJECT_ID'
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)



function App() {

  const { chain, chains } = useNetwork()

  return (
    <BaseStyle>
      <WagmiConfig config={wagmiConfig}>
        <Header />
        <AppStyle>
        {chain && <div>Connected to {chain.name}</div>}
      {chains && (
        <div>Available chains: {chains.map((chain) => chain.name + " ")}</div>
      )}
        </AppStyle>
      </WagmiConfig>    
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </BaseStyle>
  )
}

export default App

const BaseStyle = styled.div`
  width: 100vw;
  height: 100vh;
`

const AppStyle = styled.div`
  text-align: center;
`

