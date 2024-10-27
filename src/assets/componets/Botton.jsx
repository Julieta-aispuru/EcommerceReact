function Botton ({color, handler, children}) {
    return  (
    <button
    style={{backgroundColor:color}}
    onClick={handler}
    >   
    {children}
    </button>
    )
  }
export default Botton



