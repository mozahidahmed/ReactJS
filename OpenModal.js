// 01.Click modal button setup
<div className="navbar-end p-2 bg-primary">
<div className="">
  {/* <button htmlFor="my-modal-6" onClick={() => { setShow(true) }} className="btn hover:bg-white hover:text-black btn-outline">AddBill</button> */}
  
  <label onClick={() => { setShow(true) }} className="btn hover:bg-white hover:text-black btn-outline" htmlFor="my-modal" >AddBill</label>

 


</div>
</div>

</div>
{show === true && <BillingModal show={show} />}










// 02. open modal
<div >

<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">


   <form onSubmit={handleSubmit(onSubmit)}  className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
<label></label>

<input  placeholder="Task Name " class="input input-bordered w-full max-w-xs" type="text" {...register("fullName", { required: true, maxLength: 20 })}/>

<input  placeholder="Email" class="input input-bordered w-full max-w-xs" type="text" {...register("Email", { required: true, maxLength: 20 })}/>


<input  placeholder="Description" class="input input-bordered w-full max-w-xs" type="text" {...register("Description", { required: true, maxLength: 20 })}/>


  
<button className='btn w-full max-w-xs' type="submit">Add</button>
</form>
   
   
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">X</label>
    </div>
  </div>
</div>

</div>



