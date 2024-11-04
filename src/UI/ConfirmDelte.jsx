let ConfirmDelete=({onConfirm,onClose,resourceName})=>{
   console.log("worked till here")
    return <>
    <h1>
        Are you sure you want to delete {resourceName} item?
    </h1>
    <button onClick={onConfirm}>Delete</button>
    <button onClick={onClose}>Cancel</button>
    </>

}
export default ConfirmDelete;