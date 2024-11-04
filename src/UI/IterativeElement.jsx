let Rows=({label,error,children})=>{
    return<>
     <label>{label}</label>
     {children}
     {error&&<h1>{error}</h1>}
    </>
}
export default Rows;