function Navbar() {
  return (
    <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold text-blue-400">PentestPro</h1>
      <ul className="flex gap-6">
        <li><a href="#"   >Home</a></li>
        <li><a href="#about" className="hover:text-blue-300 text-blue-400">About</a></li>
        <li><a href="#contact" className="hover:text-blue-300 text-blue-400">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
