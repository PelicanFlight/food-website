import React from 'react'

import { SidebarContainer, SidebarMenu, SidebarLink, MobileIconClose } from './SidebarElements'
import { FaTimes } from 'react-icons/fa'


const SideBar = ({isOpen, toggle}) => {
  return (
<SidebarContainer isOpen={isOpen}>


    <SidebarMenu isOpen={isOpen}>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/">Specialty</SidebarLink>
        <SidebarLink to="/">Popular</SidebarLink>
        <SidebarLink to="/">Gallery</SidebarLink>
        <SidebarLink to="/">Review</SidebarLink>
    </SidebarMenu>
</SidebarContainer>
  )
}

export default SideBar