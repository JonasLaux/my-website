import { Layout } from "antd"
import React from "react"
import styled from "styled-components"
import DarkModeToggler from "../components/DarkModeToggler"

const Container = styled.div`
  background-color: red;
`
const { Header, Content, Footer, Sider } = Layout

export default function Home() {
  return (
    <Layout >
      <Header>
        <DarkModeToggler />
        header
      </Header>
      <Layout>
        <Sider>left sidebar</Sider>
        <Content>main content</Content>
        <Sider>right sidebar</Sider>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  )
}
