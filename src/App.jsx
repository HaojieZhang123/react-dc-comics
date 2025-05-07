import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

const links = [
  {
    id: 1,
    href: "#",
    label: "Characters",
    current: false,
  },
  {
    id: 2,
    href: "#",
    label: "Comics",
    current: true,
  },
  {
    id: 3,
    href: "#",
    label: "Movies",
    current: false,
  },
  {
    id: 4,
    href: "#",
    label: "TV",
    current: false,
  },
  {
    id: 5,
    href: "#",
    label: "Games",
    current: false,
  },
  {
    id: 6,
    href: "#",
    label: "Collectibles",
    current: false,
  },
  {
    id: 7,
    href: "#",
    label: "Videos",
    current: false,
  },
  {
    id: 8,
    href: "#",
    label: "Fans",
    current: false,
  },
  {
    id: 9,
    href: "#",
    label: "News",
    current: false,
  },
  {
    id: 10,
    href: "#",
    label: "Shop",
    current: false,
  }
]

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer links={links} />
    </>
  )
}

export default App
