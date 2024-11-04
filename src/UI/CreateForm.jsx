import { useForm } from "react-hook-form";
import Rows from "./IterativeElement"

import { UpdateForm } from "../assets/Features/Cabins/UpdateCabin";
import { CreateCabin } from "../assets/Features/Cabins/CreateCabin";
import styled from "styled-components";


//elsint-disable-next-line
export let CreateForm=({cabin={}})=>{
    let Style={
        width:"60%"
    };
    let Grid={
        gridColumn:"1 / -1",
        textAlign:"center",
        margin:"auto",
       
    }
    let Btn=styled.button`
    font-size: 1rem;
    width:60%;
    background-color: aquamarine;
    padding:10px;
    `;
  
    let Div=styled.div`
    font-size:1.5rem ;
    display: grid;
    grid-template-columns: 14rem auto;
    margin: 0 auto;
    text-align: center;
    gap: 1rem;
    `;
    let{id:editedId,...editValues}=cabin;
    let{isCreating,creatingForm}=CreateCabin();
    let{isEditing,EditForm}=UpdateForm();
    // console.log(editedId)
    let isEdited=Boolean(editedId);
    const {register,handleSubmit,formState,getValues,reset}=useForm({
        defaultValues:isEdited?editValues:{},
    });
 

    const {errors}=formState;
  
    let SubmitedForm=(data)=>{
        const image=typeof(data.images)=="string"?data.images:data.images[0];
        if(editedId){
            console.log(image)
            EditForm({...data,images:image,editedId:editedId},{
                onSuccess:()=>reset(),
            });
        }else
        creatingForm({...data,images:image},{
            onSuccess:()=>reset(),
        });
    }
    return <Div>
      {/* <Hi onClick={()=>onClose()}>&#x2715;</Hi>  */}
    <Rows label={"Description"} error={errors?.description?.message} >
        <input type="text" id="first"  {...register('description',{
        required:"name must be filled",
        min:{
        value:5,
            message:"name must be greater than 3",
        },
        })} style={Style}/>
    </Rows>
    <Rows label="MaxCapacity" error={errors?.capacity?.message}>
        <input type="number" id="max"{...register('capacity',{
            required:"capacity must be filled",
            min:{
                value:10,
                message:"capacity must be greater than 10",
            }
        })} style={Style}/>
    </Rows>
    <Rows label="TotalPrice" error={errors?.capacity?.message}>
        <input type="number" id="max"{...register('TotalPrice',{
            required:"Price  must be filled",
            min:{
                value:10,
                message:"capacity must be greater than 10",
            }
        })} style={Style}/>
    </Rows>
   <Rows label="discount" error={errors?.discount?.message}>
        <input type="number" id="discount" {...register('discount',{
         required:false,
            validate:(value)=>value<=getValues('TotalPrice')||"must be less than TotalPrice",
        })} style={Style}/>
    </Rows>
    <input type="file" accept="image/*" {...register('images',{
        required:isEdited?false:true,
    })} style={Grid}/>
    {/* {errors?.discount&&(<h1>{errors.discount.message}</h1>)} */}
    {/* <input type="hidden" value={new Date()} {...register('created_at')}/> */}
    
    <Btn onClick={handleSubmit(SubmitedForm)} disabled={isCreating||isEditing} style={Grid}>{isEdited?"Editing":"Submit"} </Btn>
</Div>
}