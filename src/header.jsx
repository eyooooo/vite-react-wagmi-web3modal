import React from 'react'
import styled from 'styled-components';

import { useWeb3Modal } from '@web3modal/react'
import { useAccount, useDisconnect, useNetwork } from 'wagmi'

function Header() {

const { isOpen, open, close, setDefaultChain } = useWeb3Modal()
const { address, isDisconnected, isConnected } = useAccount()
const { disconnect } = useDisconnect()
const { chain, chains } = useNetwork()

  return (
    <div>
      <HeaderStyle>
        { isConnected ?
            <button onClick={() => open()}>{address.substring(0,8)}</button> :
            <button onClick={() => open()}>Connect</button>
        }
      </HeaderStyle>
    </div>
  )
}

export default Header


const HeaderStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: baseline;
  margin-bottom: 1em;
  padding-right: 1em;
  background-color: rgb(192, 45, 26);
  color: #fff;
`;