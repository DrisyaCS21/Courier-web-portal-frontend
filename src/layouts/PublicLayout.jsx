import Header from '../components/Header/Header'

const PublicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default PublicLayout